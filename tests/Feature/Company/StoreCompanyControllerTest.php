<?php

use App\Modules\Company\Domain\Models\Company;

test('it can store a company through the controller', function () {
    $response = $this->postJson(route('companies.store'), [
        'name' => 'Web Property Corp',
        'settings' => ['theme' => 'light']
    ]);

    $response->assertStatus(201)
        ->assertJsonPath('data.name', 'Web Property Corp');

    $this->assertDatabaseHas('companies', [
        'name' => 'Web Property Corp'
    ]);
});
