<?php

namespace App\Modules\Properties\Infrastructure\Services;

use App\Modules\Properties\Domain\Services\GeocodingServiceInterface;
use Illuminate\Support\Facades\Http;

class GoogleGeocodingService implements GeocodingServiceInterface
{
    public function __construct(
        protected string $apiKey
    ) {}

    public function geocode(string $address, ?string $ubigeoId = null): ?array
    {
        if (empty($this->apiKey)) {
            return null;
        }

        $response = Http::get('https://maps.googleapis.com/maps/api/geocode/json', [
            'address' => $address . ($ubigeoId ? ' Perú' : ''),
            'key' => $this->apiKey,
        ]);

        if ($response->successful() && isset($response['results'][0]['geometry']['location'])) {
            $location = $response['results'][0]['geometry']['location'];
            return [
                'latitude' => $location['lat'],
                'longitude' => $location['lng'],
            ];
        }

        return null;
    }
}
