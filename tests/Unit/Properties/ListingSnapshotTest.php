<?php

use App\Modules\Properties\Application\Actions\CreateOrUpdateListingAction;
use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Properties\Domain\Models\Listing;
use App\Modules\Auth\Domain\Models\User;

test('action accumulates price history in json', function () {
    $user = User::factory()->create();
    $property = Property::factory()->create(['company_id' => $user->company_id]);
    
    $action = app(CreateOrUpdateListingAction::class);

    // Initial Listing
    $action->execute($property, [
        'price' => 1000,
        'currency' => 'USD',
        'description' => 'Initial',
        'status' => 'active'
    ], $user->id);

    // Update Price
    $action->execute($property, [
        'price' => 1200,
        'currency' => 'USD',
        'description' => 'Updated',
        'status' => 'active'
    ], $user->id);

    $latestListing = Listing::where('listable_id', $property->id)->where('status', 'active')->first();
    
    expect($latestListing->price_history)->toHaveCount(1);
    expect($latestListing->price_history[0]['price'])->toBe(1000);
});
