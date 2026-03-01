<?php

use App\Modules\Company\Domain\Models\Company;
use App\Modules\CRM\Domain\Models\PipelineStage;
use App\Modules\CRM\Domain\Models\Lead;
use App\Modules\CRM\Application\Actions\AdvanceLeadStageAction;

test('it can advance a lead through the pipeline', function () {
    $company = Company::factory()->create();
    
    $stage1 = PipelineStage::create(['company_id' => $company->id, 'name' => 'Capture', 'order' => 1]);
    $stage2 = PipelineStage::create(['company_id' => $company->id, 'name' => 'Visit', 'order' => 2]);

    $lead = Lead::create([
        'company_id' => $company->id,
        'pipeline_stage_id' => $stage1->id,
        'client_name' => 'John Doe'
    ]);

    $action = new AdvanceLeadStageAction($lead->id, $stage2->id);
    $updatedLead = $action->execute();

    expect($updatedLead->pipeline_stage_id)->toBe($stage2->id);
    expect($updatedLead->metadata['stage_history'])->toHaveCount(1);
    expect($updatedLead->metadata['stage_history'][0]['stage_id'])->toBe($stage2->id);

    $this->assertDatabaseHas('leads', [
        'id' => $lead->id,
        'pipeline_stage_id' => $stage2->id
    ]);
});

test('it prevents advancing to a stage of another company', function () {
    $company1 = Company::factory()->create();
    $company2 = Company::factory()->create();
    
    $stage1 = PipelineStage::create(['company_id' => $company1->id, 'name' => 'Stage 1']);
    $stage2 = PipelineStage::create(['company_id' => $company2->id, 'name' => 'Stage 2']);

    $lead = Lead::create([
        'company_id' => $company1->id,
        'pipeline_stage_id' => $stage1->id,
        'client_name' => 'John Doe'
    ]);

    $action = new AdvanceLeadStageAction($lead->id, $stage2->id);
    
    expect(fn() => $action->execute())->toThrow(RuntimeException::class, "Stage does not belong to the same company.");
});
