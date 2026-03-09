<?php

namespace App\Modules\Analytics\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Domain\Models\Property;
use App\Modules\CRM\Domain\Models\Lead;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $companyId = Auth::user()->company_id;

        return Inertia::render('Analytics::Dashboard', [
            'stats' => [
                'total_properties' => (int) Property::where('company_id', $companyId)->count(),
                'total_leads' => (int) Lead::where('company_id', $companyId)->count(),
                'avg_lead_score' => (int) Lead::where('company_id', $companyId)->avg('score'),
                'recent_properties' => Property::where('company_id', $companyId)->latest()->limit(5)->get(),
            ]
        ]);
    }
}
