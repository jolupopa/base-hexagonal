<?php

namespace App\Modules\Analytics\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Application\Actions\GetGlobalStatsAction;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    /**
     * @param GetGlobalStatsAction $action
     * @return Response
     */
    public function __invoke(GetGlobalStatsAction $action): Response
    {
        return Inertia::render('Admin::Analytics/Dashboard', [
            'stats' => $action->execute()
        ]);
    }
}
