<?php

use App\Modules\Company\Application\Actions\CreateCompanyAction;
use App\Modules\Company\Domain\Models\Company;

test('it can create a company through the action', function () {
    $action = new CreateCompanyAction('Test Company', ['theme' => 'dark']);
    $company = $action->execute();

    expect($company)->toBeInstanceOf(Company::class);
    expect($company->name)->toBe('Test Company');
    expect($company->slug)->toContain('test-company');
    expect($company->id)->toBeUuid();
    
    $this->assertDatabaseHas('companies', [
        'id' => $company->id,
        'name' => 'Test Company'
    ]);
});
