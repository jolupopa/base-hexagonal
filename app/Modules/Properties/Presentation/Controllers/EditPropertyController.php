<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Properties\Domain\Models\Amenity;
use App\Modules\Categories\Domain\Models\Category;
use App\Modules\Properties\Presentation\Resources\PropertyResource;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class EditPropertyController extends Controller
{
    public function __invoke(Property $property)
    {
        abort_if($property->company_id !== Auth::user()->company_id, 403);

        $property->load(['amenities', 'category']);

        return Inertia::render('Properties::Form', [
            'property' => new PropertyResource($property),
            'categories' => Category::where('company_id', Auth::user()->company_id)->where('type', 'property')->get(['id', 'name']),
            'amenities' => Amenity::all(['id', 'name', 'icon']),
        ]);
    }
}
