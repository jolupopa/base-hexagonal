<?php

use App\Modules\Auth\Domain\Models\User;
use App\Modules\Company\Domain\Models\Company;
use App\Modules\Company\Application\Actions\AddMemberToCompanyAction;
use App\Modules\Company\Domain\Models\Membership;

test('it can add a member to a company', function () {
    $company = Company::create(['name' => 'Acme Corp', 'slug' => 'acme-corp']);
    $user = User::factory()->create();

    $action = new AddMemberToCompanyAction($company, $user, 'admin');
    $membership = $action->execute();

    expect($membership)->toBeInstanceOf(Membership::class);
    expect($membership->company_id)->toBe($company->id);
    expect($membership->user_id)->toBe($user->id);
    expect($membership->role)->toBe('admin');
    
    $this->assertDatabaseHas('memberships', [
        'company_id' => $company->id,
        'user_id' => $user->id,
        'role' => 'admin'
    ]);
});
