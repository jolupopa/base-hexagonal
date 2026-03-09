<?php

namespace App\Modules\Admin\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Auth\Domain\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;

class ListUsersPropertyStatsAction
{
    /**
     * @param array $filters
     * @param int $perPage
     * @return LengthAwarePaginator
     */
    public function execute(array $filters = [], int $perPage = 10): LengthAwarePaginator
    {
        $query = User::query()
            ->withCount(['properties', 'publishedProperties'])
            ->whereHas('roles', function($q) {
                // Usuarios con roles de gestión (compañías, agentes, propietarios)
                $q->whereIn('slug', ['company', 'agent', 'owner']);
            })
            ->latest();

        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function($q) use ($search) {
                $q->where('name', 'ILIKE', "%{$search}%")
                  ->orWhere('email', 'ILIKE', "%{$search}%")
                  ->orWhere('company_name', 'ILIKE', "%{$search}%");
            });
        }

        return $query->paginate($perPage);
    }
}
