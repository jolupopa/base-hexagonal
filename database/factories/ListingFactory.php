<?php

namespace Database\Factories;

use App\Modules\Properties\Domain\Models\Listing;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Company\Domain\Models\Company;
use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

class ListingFactory extends Factory
{
    protected $model = Listing::class;

    public function definition(): array
    {
        return [
            'company_id' => Company::factory(),
            'created_by' => User::factory(),
            'listable_type' => Property::class,
            'listable_id' => Property::factory(),
            'price' => fake()->randomFloat(2, 50000, 1000000),
            'currency' => 'USD',
            'description' => fake()->paragraph(),
            'status' => 'active',
            'starts_at' => now(),
            'ends_at' => null,
            'days_on_market' => 0,
            'price_history' => [],
            'changes' => [],
        ];
    }

    public function active(): self
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'active',
            'ends_at' => null,
        ]);
    }

    public function closed(): self
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'expired',
            'ends_at' => now(),
        ]);
    }
}
