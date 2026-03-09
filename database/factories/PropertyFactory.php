<?php

namespace Database\Factories;

use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyFactory extends Factory
{
    protected $model = Property::class;

    public function definition(): array
    {
        return [
            'company_id' => Company::factory(),
            'user_id' => User::factory(),
            'title' => fake()->sentence(4),
            'description' => fake()->paragraph(),
            'type' => fake()->randomElement(['house', 'apartment', 'commercial', 'land', 'office']),
            'operation' => fake()->randomElement(['sale', 'rent']),
            'price' => fake()->randomFloat(2, 50000, 1000000),
            'currency' => 'USD',
            'area_total' => fake()->randomFloat(2, 50, 500),
            'address' => fake()->address(),
            'status' => 'published',
            'ubigeo_id' => '150101', // Lima default
        ];
    }
}
