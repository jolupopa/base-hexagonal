<?php

namespace App\Modules\Admin\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Company\Domain\Models\Company;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Billing\Domain\Models\Subscription;
use App\Modules\Properties\Domain\Models\Property;

class GetGlobalStatsAction extends BaseAction
{
    public function execute(): array
    {
        return [
            'total_companies' => Company::count(),
            'total_users' => User::count(),
            'active_subscriptions' => Subscription::where('status', 'active')->count(),
            'total_properties' => Property::count(),
            'system_health' => 'healthy', // Simplified for now
            'last_sync' => now()->toDateTimeString(),
        ];
    }
}
