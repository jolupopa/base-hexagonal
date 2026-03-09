<?php

namespace App\Modules\Admin\Presentation\Controllers\Properties;

use App\Http\Controllers\Controller;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Admin\Presentation\Resources\UserPropertyResource;
use App\Modules\Admin\Application\Actions\ListUsersPropertyStatsAction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminPropertyIndexController extends Controller
{
    public function __invoke(Request $request, ListUsersPropertyStatsAction $action): Response
    {
        $users = $action->execute($request->only(['search']));

        return Inertia::render('Admin::Properties/Index', [
            'users' => UserPropertyResource::collection($users),
            'filters' => $request->only(['search'])
        ]);
    }
}
