<?php

namespace App\Modules\Admin\Application\Actions;

use App\Modules\Auth\Domain\Models\User;

class UpdateUserQuotaAction
{
    /**
     * @param string $userId
     * @param int $propertyLimit
     * @return User
     */
    public function execute(string $userId, int $propertyLimit): User
    {
        $user = User::findOrFail($userId);
        $user->update([
            'property_limit' => $propertyLimit,
        ]);

        return $user;
    }
}
