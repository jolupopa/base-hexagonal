<?php

namespace App\Modules\Admin\Presentation\Controllers\Properties;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Properties\Presentation\Resources\PropertyResource;
use App\Modules\Admin\Application\Actions\GetUserInventoryAction;
use Illuminate\Http\Request;

class AdminUserPropertiesController extends Controller
{
    public function __invoke(Request $request, string $userId, GetUserInventoryAction $action)
    {
        $user = User::findOrFail($userId);
        $properties = $action->execute($userId);

        return response()->json([
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
            ],
            'properties' => PropertyResource::collection($properties)
        ]);
    }
}
