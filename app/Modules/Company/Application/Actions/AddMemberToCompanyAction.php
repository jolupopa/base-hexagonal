<?php

namespace App\Modules\Company\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Company\Domain\Models\Company;
use App\Modules\Company\Domain\Models\Membership;

class AddMemberToCompanyAction extends BaseAction
{
    public function __construct(
        protected Company $company,
        protected User $user,
        protected string $role = 'agent'
    ) {}

    public function execute(): Membership
    {
        return Membership::updateOrCreate(
            [
                'company_id' => $this->company->id,
                'user_id' => $this->user->id,
            ],
            [
                'role' => $this->role,
            ]
        );
    }
}
