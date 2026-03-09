<?php

namespace App\Modules\Admin\Presentation\Resources;

use App\Core\BaseResource;
use Illuminate\Http\Request;

class UserPropertyResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'             => $this->id,
            'name'           => $this->name,
            'email'          => $this->email,
            'company_name'   => $this->company_name,
            'initials'       => $this->getInitials(),
            'avatar_url'     => $this->avatar_url ? '/storage/' . $this->avatar_url : null,
            'property_limit' => (int) $this->property_limit,
            'stats' => [
                'total'     => (int) $this->properties_count,
                'published' => (int) $this->published_properties_count,
                'trash'     => (int) $this->properties()->onlyTrashed()->count(),
            ],
            // Podríamos incluir los roles si fuera necesario, pero por ahora simplificado
        ];
    }
}
