<?php

use App\Modules\Auth\Domain\Models\User;
use App\Modules\Company\Domain\Models\Company;
use App\Modules\Properties\Domain\Models\Ubigeo;
use App\Modules\Properties\Domain\Models\Amenity;
use App\Modules\Properties\Application\Actions\PublishPropertyAction;

test('it can publish a property with amenities', function () {
    $company = Company::factory()->create();
    $agent = User::factory()->create(['company_id' => $company->id]);
    
    $ubigeo = Ubigeo::create([
        'id' => '150101',
        'department' => 'Lima',
        'province' => 'Lima',
        'district' => 'Lima',
    ]);

    $amenity1 = Amenity::create(['name' => 'Piscina']);
    $amenity2 = Amenity::create(['name' => 'Gimnasio']);

    $details = [
        'company_id' => $company->id,
        'user_id' => $agent->id,
        'ubigeo_id' => $ubigeo->id,
        'title' => 'Lujoso Departamento en Miraflores',
        'type' => 'apartment',
        'operation' => 'sale',
        'price' => 250000,
        'area_total' => 120,
        'address' => 'Av. Larco 123',
    ];

    $action = new PublishPropertyAction($details, [$amenity1->id, $amenity2->id]);
    $property = $action->execute();

    expect($property->title)->toBe('Lujoso Departamento en Miraflores');
    expect($property->status)->toBe('published');
    expect($property->amenities)->toHaveCount(2);
    
    $this->assertDatabaseHas('properties', [
        'id' => $property->id,
        'title' => 'Lujoso Departamento en Miraflores'
    ]);
});
