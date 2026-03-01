<?php

use App\Modules\Company\Domain\Models\Company;

test('it can register a new user linked to a company', function () {
    $company = Company::factory()->create();

    $response = $this->postJson('/register', [
        'company_id' => $company->id,
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
    ]);

    $response->assertStatus(201); // Fortify returns 201 for headless registration success

    $this->assertDatabaseHas('users', [
        'email' => 'john@example.com',
        'company_id' => $company->id,
    ]);
});
