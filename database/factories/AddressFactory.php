<?php

namespace Database\Factories;

use App\Modules\Properties\Domain\Models\Address;
use App\Modules\Company\Domain\Models\Company;
use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    protected $model = Address::class;

    public function definition(): array
    {
        return [
            'company_id' => Company::factory(),
            'addressable_type' => Property::class,
            'addressable_id' => Property::factory(),
            'address' => fake()->address(),
            'ubigeo_id' => '150101', // Lima
            'reference' => fake()->sentence(),
            'latitude' => fake()->latitude(),
            'longitude' => fake()->longitude(),
        ];
    }
}
