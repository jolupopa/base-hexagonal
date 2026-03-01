<?php

namespace App\Domains\Auth\Actions;

use App\Modules\Auth\Domain\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'company_name' => ['required_without:company_id', 'string', 'max:255'],
            'company_id' => ['nullable', 'uuid', 'exists:companies,id'],
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        return DB::transaction(function () use ($input) {
            $companyId = $input['company_id'] ?? null;

            if (!$companyId && isset($input['company_name'])) {
                $company = (new \App\Modules\Company\Application\Actions\CreateCompanyAction(
                    name: $input['company_name']
                ))->execute();
                $companyId = $company->id;
            }

            return User::create([
                'company_id' => $companyId,
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
            ]);
        });
    }
}
