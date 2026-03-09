<?php

namespace App\Modules\CRM\Presentation\Resources;

use App\Core\BaseResource;
use Illuminate\Http\Request;

class LeadResource extends BaseResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'client_name' => $this->client_name,
            'client_email' => $this->client_email,
            'client_phone' => $this->client_phone,
            'score' => $this->score,
            'notes' => $this->notes,
            'stage_id' => $this->pipeline_stage_id,
            'metadata' => $this->metadata,
            'created_at' => $this->created_at->toISOString(),
            'created_at_human' => $this->created_at->diffForHumans(),
            'created_at_formatted' => $this->created_at->format('d/m/Y'),
        ];
    }
}
