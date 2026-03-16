<?php

namespace App\Modules\Properties\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Properties\Domain\Models\Listing;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

/**
 * Gestiona el versionamiento de los listings.
 * Si hay cambios sensibles, cierra el listing actual y crea uno nuevo.
 */
class CreateOrUpdateListingAction extends BaseAction
{
    public function execute(Model $listable, array $data = []): Listing
    {
        return DB::transaction(function () use ($listable, $data) {
            $activeListing = $listable->listings()->where('status', 'active')->latest()->first();
            
            // Si el precio o moneda cambian, cerramos el actual y creamos uno nuevo
            if ($activeListing && ($activeListing->price != ($data['price'] ?? $activeListing->price) || $activeListing->currency != ($data['currency'] ?? $activeListing->currency))) {
                $activeListing->update([
                    'ends_at' => now(),
                    'status' => 'expired',
                    'days_on_market' => $activeListing->starts_at->diffInDays(now()),
                ]);
            } else if ($activeListing) {
                // Si no hay cambios críticos, actualizamos el actual (ej: descripción)
                $activeListing->update($this->filterData($data));
                return $activeListing;
            }

            // Crear nuevo snapshot
            return Listing::create(array_merge($this->filterData($data), [
                'company_id' => $listable->company_id,
                'listable_type' => get_class($listable),
                'listable_id' => $listable->id,
                'starts_at' => now(),
                'status' => 'active',
                'created_by' => auth()->id(),
                'price_history' => $this->buildPriceHistory($activeListing, $data),
            ]));
        });
    }

    protected function filterData(array $data): array
    {
        return array_intersect_key($data, array_flip([
            'price', 'currency', 'description', 'status'
        ]));
    }

    protected function buildPriceHistory(?Listing $previous, array $newData): array
    {
        $history = $previous?->price_history ?? [];
        if ($previous) {
            $history[] = [
                'price' => $previous->price,
                'currency' => $previous->currency,
                'date' => $previous->starts_at->toISOString(),
            ];
        }
        return $history;
    }
}
