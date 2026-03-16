<?php

use App\Modules\Auth\Domain\Models\User;
use App\Modules\Properties\Domain\Models\Property;

test('user cannot see properties from other company', function () {
    $user1 = User::factory()->create();
    $user2 = User::factory()->create();
    
    $property = Property::factory()->create(['company_id' => $user2->company_id]);

    actingAsCompany($user1)
        ->get(route('properties.show', $property->id))
        ->assertStatus(403); // Or 404 depending on how global scope + policies behave
});

test('property is automatically assigned to user company', function () {
    $user = User::factory()->create();
    
    actingAsCompany($user);
    
    $property = new Property([
        'title' => 'Test',
        'price' => 100,
        // company_id is omitted
    ]);
    
    $property->save();

    expect($property->company_id)->toBe($user->company_id);
});
