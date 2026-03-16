<?php

use App\Modules\Auth\Domain\Models\User;
use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Properties\Domain\Models\Listing;

beforeEach(function () {
    $this->user = User::factory()->create();
    $this->property = Property::factory()->create([
        'company_id' => $this->user->company_id,
        'user_id' => $this->user->id,
        'price' => 100000,
        'status' => 'published'
    ]);

    // Create initial active listing
    Listing::factory()->create([
        'company_id' => $this->user->company_id,
        'listable_id' => $this->property->id,
        'listable_type' => Property::class,
        'price' => 100000,
        'status' => 'active'
    ]);
});

test('updating price creates a new listing snapshot', function () {
    $data = array_merge($this->property->toArray(), [
        'price' => 120000,
        'address' => [
            'address' => 'Nueva Direccion',
            'ubigeo_id' => '150101'
        ]
    ]);

    actingAsCompany($this->user)
        ->put(route('properties.update', $this->property->id), $data)
        ->assertRedirect();

    $this->property->refresh();
    expect($this->property->price)->toBe(120000.00);

    // Verify snapshots
    $listings = Listing::where('listable_id', $this->property->id)->get();
    
    expect($listings)->toHaveCount(2);
    
    $oldListing = $listings->where('price', 100000)->first();
    $newListing = $listings->where('price', 120000)->first();

    expect($oldListing->status)->not->toBe('active')
        ->and($oldListing->ends_at)->not->toBeNull()
        ->and($newListing->status)->toBe('active')
        ->and($newListing->ends_at)->toBeNull();
});

test('updating non-critical fields does not create new listing', function () {
    $data = array_merge($this->property->toArray(), [
        'bedrooms' => 10, // Not critical for Listing snapshot in current logic
        'address' => [
            'address' => 'Misma Direccion',
            'ubigeo_id' => '150101'
        ]
    ]);

    actingAsCompany($this->user)
        ->put(route('properties.update', $this->property->id), $data)
        ->assertRedirect();

    expect(Listing::where('listable_id', $this->property->id)->count())->toBe(1);
});
