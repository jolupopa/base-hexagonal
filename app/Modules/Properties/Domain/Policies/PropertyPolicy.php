<?php

namespace App\Modules\Properties\Domain\Policies;

use App\Modules\Auth\Domain\Models\User;
use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Auth\Access\HandlesAuthorization;

class PropertyPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true; // Filtrado por Global Scope HasCompany
    }

    public function view(User $user, Property $property): bool
    {
        return $property->company_id === $user->company_id;
    }

    public function create(User $user): bool
    {
        return true; // Podría refinarse por roles
    }

    public function update(User $user, Property $property): bool
    {
        return $property->company_id === $user->company_id && 
               ($user->id === $property->user_id || $user->hasRole('admin'));
    }

    public function delete(User $user, Property $property): bool
    {
        return $this->update($user, $property);
    }
}
