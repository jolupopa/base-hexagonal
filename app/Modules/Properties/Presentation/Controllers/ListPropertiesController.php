<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Properties\Presentation\Resources\PropertyResource;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ListPropertiesController extends Controller
{
    public function __invoke()
    {
        $properties = Property::where('company_id', Auth::user()->company_id)
            ->with(['agent', 'ubigeo'])
            ->latest()
            ->paginate(12);

        return Inertia::render('Properties::Index', [
            'properties' => PropertyResource::collection($properties),
        ]);
    }
}
