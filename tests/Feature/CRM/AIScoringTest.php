<?php

use App\Modules\CRM\Domain\Models\Lead;
use App\Modules\CRM\Domain\Models\PipelineStage;
use App\Modules\Company\Domain\Models\Company;
use App\Modules\CRM\Domain\Services\AIServiceInterface;
use App\Modules\CRM\Application\Actions\CalculateLeadScoreAction;

test('it can score a lead using AI service', function () {
    $company = Company::factory()->create();
    $stage = PipelineStage::create(['company_id' => $company->id, 'name' => 'Capture']);
    
    $lead = Lead::create([
        'company_id' => $company->id,
        'pipeline_stage_id' => $stage->id,
        'client_name' => 'High Potential Client',
        'notes' => 'Looking to buy 3 apartments in Miraflores'
    ]);

    $mockAI = Mockery::mock(AIServiceInterface::class);
    $mockAI->shouldReceive('scoreLead')
        ->once()
        ->with(Mockery::type(Lead::class))
        ->andReturn(95);

    $action = new CalculateLeadScoreAction($lead->id, $mockAI);
    $scoredLead = $action->execute();

    expect($scoredLead->score)->toBe(95);
    
    $this->assertDatabaseHas('leads', [
        'id' => $lead->id,
        'score' => 95
    ]);
});
