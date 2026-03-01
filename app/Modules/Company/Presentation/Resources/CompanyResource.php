<?php

namespace App\Modules\Company\Presentation\Resources;

use App\Core\BaseResource;
use Illuminate\Http\Request;

class CompanyResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'settings' => $this->settings,
            'created_at' => $this->transformDate($this->created_at),
        ];
    }
}
