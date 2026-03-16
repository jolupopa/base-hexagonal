<?php

namespace Database\Factories;

use App\Modules\Categories\Domain\Models\Category;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition(): array
    {
        return [
            'company_id' => Company::factory(),
            'name' => fake()->word(),
            'slug' => fake()->slug(),
            'type' => 'property',
        ];
    }
}
