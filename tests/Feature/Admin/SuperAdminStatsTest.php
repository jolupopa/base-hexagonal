<?php

use App\Modules\Admin\Application\Actions\GetGlobalStatsAction;
use App\Modules\Company\Domain\Models\Company;

test('it can retrieve global stats for super admin', function () {
    Company::factory()->count(3)->create();
    
    $action = new GetGlobalStatsAction();
    $stats = $action->execute();

    expect($stats['total_companies'])->toBeGreaterThanOrEqual(3);
    expect($stats['system_health'])->toBe('healthy');
});
