<?php

namespace App\Modules\Properties\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Properties\Domain\Models\Address;
use Illuminate\Support\Facades\DB;

class CreatePropertyAction extends BaseAction
{
    public function __construct(
        protected CreateOrUpdateListingAction $listingAction
    ) {}

    public function execute(array $data): Property
    {
        return DB::transaction(function () use ($data) {
            // 1. Crear propiedad
            $property = Property::create($data);

            // 2. Crear Dirección si existe
            if (!empty($data['address'])) {
                $property->address()->create(array_merge($data['address'], [
                    'company_id' => $property->company_id,
                ]));
            }

            // 3. Sincronizar Amenidades
            if (!empty($data['amenities'])) {
                $property->amenities()->sync($data['amenities']);
            }

            // 4. Crear Listing Inicial
            $this->listingAction->execute($property, $data);

            return $property->load(['address', 'amenities', 'listings']);
        });
    }
}
