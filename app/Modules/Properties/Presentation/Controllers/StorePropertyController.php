<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Application\Actions\CreatePropertyAction;
use App\Modules\Properties\Presentation\Requests\StorePropertyRequest;
use App\Modules\Properties\Presentation\Resources\PropertyResource;
use Illuminate\Http\RedirectResponse;

class StorePropertyController extends Controller
{
    public function __invoke(StorePropertyRequest $request, CreatePropertyAction $action): RedirectResponse
    {
        // Autorización manual si es necesario (ej: Spatie Permissions)
        // $this->authorize('create', Property::class);

        $property = $action->execute($request->validated());

        return redirect()->back()->with('toast', [
            'type' => 'success',
            'message' => 'Propiedad creada correctamente.',
        ]);
    }
}
