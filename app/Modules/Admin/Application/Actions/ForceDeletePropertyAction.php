<?php

namespace App\Modules\Admin\Application\Actions;

use App\Modules\Properties\Domain\Models\Property;

class ForceDeletePropertyAction
{
    /**
     * @param string $id
     * @return bool|null
     */
    public function execute(string $id): ?bool
    {
        $property = Property::withTrashed()->findOrFail($id);
        return $property->forceDelete();
    }
}
