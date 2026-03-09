<?php

namespace App\Modules\Admin\Presentation\Controllers\Properties;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Application\Actions\ForceDeletePropertyAction;
use Illuminate\Http\Request;

class AdminPropertyForceDeleteController extends Controller
{
    public function __invoke(Request $request, string $id, ForceDeletePropertyAction $action)
    {
        $action->execute($id);

        return back()->with('success', "Property #{$id} has been permanently deleted.");
    }
}
