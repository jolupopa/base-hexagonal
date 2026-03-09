<?php

namespace App\Modules\Categories\Presentation\Http\Resources;

use App\Core\BaseResource;

class CategoryResource extends BaseResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'type' => $this->type,
            'created_at' => $this->created_at->toISOString(),
            'created_at_human' => $this->created_at->diffForHumans(),
            'created_at_formatted' => $this->created_at->format('d/m/Y'),
        ];
    }
}
