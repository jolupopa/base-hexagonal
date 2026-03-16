<?php

namespace App\Modules\Properties\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Support\Facades\DB;

class UpdatePropertyAction extends BaseAction
{
    public function __construct(
        protected CreateOrUpdateListingAction $listingAction
    ) {}

    public function execute(Property $property, array $data): Property
    {
        return DB::transaction(function () use ($property, $data) {
            // 1. Actualizar propiedad
            $property->update($data);

            // 2. Actualizar Dirección
            if (!empty($data['address'])) {
                $property->address()->updateOrCreate(
                    ['addressable_id' => $property->id, 'addressable_type' => Property::class],
                    array_merge($data['address'], ['company_id' => $property->company_id])
                );
            }

            // 3. Sincronizar Amenidades
            if (isset($data['amenities'])) {
                $property->amenities()->sync($data['amenities']);
            }

            // 4. Gestionar Snapshot del Listing
            $this->listingAction->execute($property, $data);

            return $property->fresh(['address', 'amenities', 'listings']);
        });
    }
}
