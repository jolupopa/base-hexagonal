<?php

namespace App\Modules\Properties\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Properties\Domain\Services\GeocodingServiceInterface;
use Illuminate\Support\Facades\DB;

class PublishPropertyAction extends BaseAction
{
    public function __construct(
        protected array $details,
        protected array $amenityIds = [],
        protected ?GeocodingServiceInterface $geocoder = null
    ) {
        $this->geocoder = $geocoder ?? app(GeocodingServiceInterface::class);
    }

    public function execute(): Property
    {
        return DB::transaction(function () {
            $lat = $this->details['latitude'] ?? null;
            $lng = $this->details['longitude'] ?? null;

            if (!$lat || !$lng) {
                $coords = $this->geocoder->geocode($this->details['address'], $this->details['ubigeo_id']);
                if ($coords) {
                    $lat = $coords['latitude'];
                    $lng = $coords['longitude'];
                }
            }

            $property = Property::create([
                'company_id' => $this->details['company_id'],
                'user_id' => $this->details['user_id'],
                'ubigeo_id' => $this->details['ubigeo_id'],
                'title' => $this->details['title'],
                'description' => $this->details['description'] ?? null,
                'type' => $this->details['type'],
                'operation' => $this->details['operation'],
                'price' => $this->details['price'],
                'currency' => $this->details['currency'] ?? 'USD',
                'area_total' => $this->details['area_total'],
                'area_built' => $this->details['area_built'] ?? null,
                'bedrooms' => $this->details['bedrooms'] ?? 0,
                'bathrooms' => $this->details['bathrooms'] ?? 0,
                'parking_spots' => $this->details['parking_spots'] ?? 0,
                'address' => $this->details['address'],
                'latitude' => $lat,
                'longitude' => $lng,
                'status' => 'published',
                'metadata' => $this->details['metadata'] ?? [],
            ]);

            if (!empty($this->amenityIds)) {
                $property->amenities()->sync($this->amenityIds);
            }

            return $property;
        });
    }
}
