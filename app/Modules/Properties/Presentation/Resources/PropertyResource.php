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
            'deleted_at' => $this->deleted_at ? $this->deleted_at->toISOString() : null,
            'agent' => $this->whenLoaded('agent', fn() => [
                'id' => $this->agent->id,
                'name' => $this->agent->name,
                'email' => $this->agent->email,
                'property_limit' => $this->agent->property_limit,
            ]),
            'ubigeo' => $this->whenLoaded('ubigeo', fn() => [
                'district' => $this->ubigeo->district,
                'province' => $this->ubigeo->province,
            ]),
            'amenities' => $this->whenLoaded('amenities', fn() => $this->amenities->pluck('name')),
            'category' => $this->whenLoaded('category', fn() => [
                'id' => $this->category->id,
                'name' => $this->category->name,
            ]),
            'images' => $this->getMedia('gallery')->map(fn($media) => [
                'id' => $media->id,
                'url' => $media->getFullUrl(),
                'thumb' => $media->getFullUrl('thumb'),
            ]),
            'views_count' => (int) $this->views_count,
            'main_image' => $this->getFirstMediaUrl('gallery', 'thumb') ?: '/images/placeholder-property.jpg',
            'created_at' => $this->created_at->toISOString(),
            'created_at_human' => $this->created_at->diffForHumans(),
            'created_at_formatted' => $this->created_at->format('d/m/Y'),
        ];
    }
}
