<?php

use App\Modules\Company\Domain\Models\Company;
use App\Modules\Analytics\Domain\Models\Metric;
use App\Modules\Analytics\Application\Actions\GetCompanyInsightsAction;

test('it can retrieve company insights', function () {
    $company = Company::factory()->create();
    
    Metric::create([
        'company_id' => $company->id,
        'key' => 'leads_count',
        'value' => 5,
        'period' => 'daily',
        'date' => now()->toDateString()
    ]);

    $action = new GetCompanyInsightsAction($company->id, ['leads_count']);
    $insights = $action->execute();

    expect($insights)->toHaveCount(1);
    expect($insights->first()->value)->toBe(5);
});
