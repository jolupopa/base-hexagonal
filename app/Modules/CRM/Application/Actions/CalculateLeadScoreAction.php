<?php

namespace App\Modules\CRM\Application\Actions;

use App\Core\BaseAction;
use App\Modules\CRM\Domain\Models\Lead;
use App\Modules\CRM\Domain\Services\AIServiceInterface;

class CalculateLeadScoreAction extends BaseAction
{
    public function __construct(
        protected string $leadId,
        protected ?AIServiceInterface $aiService = null
    ) {
        $this->aiService = $aiService ?? app(AIServiceInterface::class);
    }

    public function execute(): Lead
    {
        $lead = Lead::findOrFail($this->leadId);
        
        $score = $this->aiService->scoreLead($lead);
        
        $lead->update(['score' => $score]);
        
        return $lead;
    }
}
