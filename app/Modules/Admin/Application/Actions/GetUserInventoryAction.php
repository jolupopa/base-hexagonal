<?php

namespace App\Modules\Admin\Application\Actions;

use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Database\Eloquent\Collection;

class GetUserInventoryAction
{
    /**
     * @param string $userId
     * @return Collection
     */
    public function execute(string $userId): Collection
    {
        return Property::withTrashed()
            ->where('user_id', $userId)
            ->with(['category', 'media'])
            ->latest()
            ->get();
    }
}
