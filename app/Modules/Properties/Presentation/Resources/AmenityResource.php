<?php

namespace App\Modules\Properties\Presentation\Resources;

use App\Core\BaseResource;
use Illuminate\Http\Request;

class AmenityResource extends BaseResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'icon' => $this->icon,
        ];
    }
}
