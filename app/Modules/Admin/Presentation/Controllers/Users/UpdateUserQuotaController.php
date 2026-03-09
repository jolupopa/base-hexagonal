<?php

namespace App\Modules\Admin\Presentation\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Application\Actions\UpdateUserQuotaAction;
use Illuminate\Http\Request;

class UpdateUserQuotaController extends Controller
{
    public function __invoke(Request $request, string $id, UpdateUserQuotaAction $action)
    {
        $request->validate([
            'property_limit' => 'required|integer|min:0',
        ]);

        $user = $action->execute($id, (int) $request->property_limit);

        return back()->with('success', "Property limit for {$user->name} updated to {$user->property_limit}.");
    }
}
