<?php

namespace App\Modules\Properties\Presentation\Resources;

use App\Core\BaseResource;
use Illuminate\Http\Request;

class PropertyResource extends BaseResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'type' => $this->type,
            'operation' => $this->operation,
            'price_formatted' => $this->currency . ' ' . number_format($this->price, 2),
            'price' => (float) $this->price,
            'currency' => $this->currency,
            'area_total' => (float) $this->area_total,
            'bedrooms' => $this->bedrooms,
            'bathrooms' => $this->bathrooms,
            'address' => $this->address,
            'status' => $this->status,
            'is_featured' => $this->is_featured,
            'agent' => $this->whenLoaded('agent', fn() => [
                'name' => $this->agent->name,
                'email' => $this->agent->email,
            ]),
            'ubigeo' => $this->whenLoaded('ubigeo', fn() => [
                'district' => $this->ubigeo->district,
                'province' => $this->ubigeo->province,
            ]),
            'amenities' => $this->whenLoaded('amenities', fn() => $this->amenities->pluck('name')),
            'created_at' => $this->transformDate($this->created_at),
        ];
    }
}
