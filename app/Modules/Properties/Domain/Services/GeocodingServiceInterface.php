<?php

namespace App\Modules\Properties\Domain\Services;

interface GeocodingServiceInterface
{
    /**
     * Convert an address to coordinates.
     *
     * @param string $address
     * @param string|null $ubigeoId
     * @return array{latitude: float, longitude: float}|null
     */
    public function geocode(string $address, ?string $ubigeoId = null): ?array;
}
