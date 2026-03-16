<?php

namespace App\Modules\Properties\Presentation\Resources;

use App\Core\BaseResource;
use Illuminate\Http\Request;

class ListingResource extends BaseResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'price' => (float) $this->price,
            'currency' => $this->currency,
            'description' => $this->description,
            'status' => $this->status,
            'starts_at' => $this->transformDate($this->starts_at),
            'ends_at' => $this->transformDate($this->ends_at),
            'days_on_market' => $this->days_on_market,
            'price_history' => $this->price_history,
            'changes' => $this->changes,
            'created_at' => $this->transformDate($this->created_at),
        ];
    }
}
