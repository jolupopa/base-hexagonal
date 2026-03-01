<?php

namespace App\Modules\CRM\Application\Actions;

use App\Core\BaseAction;
use App\Modules\CRM\Domain\Models\Lead;
use App\Modules\CRM\Domain\Models\PipelineStage;
use RuntimeException;

class AdvanceLeadStageAction extends BaseAction
{
    public function __construct(
        protected string $leadId,
        protected string $targetStageId,
        protected array $metadata = []
    ) {}

    public function execute(): Lead
    {
        $lead = Lead::findOrFail($this->leadId);
        $stage = PipelineStage::findOrFail($this->targetStageId);

        if ($lead->company_id !== $stage->company_id) {
            throw new RuntimeException("Stage does not belong to the same company.");
        }

        $lead->update([
            'pipeline_stage_id' => $stage->id,
            'metadata' => array_merge($lead->metadata ?? [], $this->metadata, [
                'stage_history' => array_merge($lead->metadata['stage_history'] ?? [], [
                    ['stage_id' => $stage->id, 'advanced_at' => now()->toDateTimeString()]
                ])
            ])
        ]);

        return $lead;
    }
}
