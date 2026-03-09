<?php

namespace App\Modules\Analytics\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Application\Actions\GetCalendarEventsAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardCalendarController extends Controller
{
    public function __invoke(Request $request)
    {
        $events = (new GetCalendarEventsAction(
            Auth::user()->company_id,
            $request->query('start'),
            $request->query('end')
        ))->execute();

        return response()->json($events);
    }
}
