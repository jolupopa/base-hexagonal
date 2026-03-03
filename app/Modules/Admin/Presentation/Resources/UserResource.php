<?php

namespace App\Modules\Admin\Presentation\Resources;

use App\Core\BaseResource;
use Illuminate\Support\Facades\Storage;
use App\Modules\Admin\Presentation\Resources\RoleResource;

class UserResource extends BaseResource
{
    public function toArray($request): array
    {
        return [
            'id'           => $this->id,
            'name'         => $this->name,
            'email'        => $this->email,
            'company_name' => $this->company_name,
            'avatar_url'   => $this->avatar_url
                ? '/storage/' . $this->avatar_url
                : null,
            'initials'     => $this->getInitials(),
            'roles'        => RoleResource::collection($this->whenLoaded('roles')),
            'created_at'   => $this->created_at->toISOString(),
        ];
    }
}
