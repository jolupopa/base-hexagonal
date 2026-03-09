<?php

namespace App\Core;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class BaseResource extends JsonResource
{
    /**
     * Transform the given date into multiple formats.
     */
    protected function transformDate($date): ?array
    {
        if (!$date instanceof Carbon && !is_string($date)) {
            return null;
        }

        $carbon = $date instanceof Carbon ? $date : Carbon::parse($date);

        return [
            'iso' => $carbon->toISOString(),
            'human' => $carbon->diffForHumans(),
            'display' => $carbon->format('d/m/Y'),
            'datetime' => $carbon->format('d/m/Y H:i'),
            'time' => $carbon->format('H:i'),
            'timestamp' => $carbon->timestamp,
        ];
    }
}
