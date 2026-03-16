<?php

namespace Database\Factories;

use App\Modules\Properties\Domain\Models\Amenity;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

class AmenityFactory extends Factory
{
    protected $model = Amenity::class;

    public function definition(): array
    {
        return [
            'company_id' => Company::factory(),
            'name' => fake()->word(),
            'icon' => 'check',
        ];
    }
}
