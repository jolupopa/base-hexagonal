<?php

namespace App\Modules\Billing\Presentation\Resources;

use App\Core\BaseResource;
use Illuminate\Http\Request;

class PlanResource extends BaseResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'price' => (float) $this->price,
            'features' => $this->features,
            'is_active' => (bool) $this->is_active,
        ];
    }
}
