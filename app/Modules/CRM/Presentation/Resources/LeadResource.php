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
            'created_at' => $this->transformDate($this->created_at),
        ];
    }
}
