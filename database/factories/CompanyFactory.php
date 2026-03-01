<?php

namespace Database\Factories;

use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CompanyFactory extends Factory
{
    protected $model = Company::class;

    public function definition(): array
    {
        return [
            'name' => fake()->company(),
            'slug' => fn (array $attributes) => Str::slug($attributes['name']),
            'settings' => [],
        ];
    }
}
