<?php

namespace App\Modules\Billing\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Billing\Domain\Models\Plan;
use App\Modules\Billing\Presentation\Resources\PlanResource;
use Inertia\Inertia;

class PricingController extends Controller
{
    public function __invoke()
    {
        $plans = Plan::where('is_active', true)->get();

        return Inertia::render('Billing::Pricing', [
            'plans' => PlanResource::collection($plans),
        ]);
    }
}
