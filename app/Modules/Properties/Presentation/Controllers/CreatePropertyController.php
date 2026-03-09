<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Domain\Models\Ubigeo;
use App\Modules\Properties\Domain\Models\Amenity;
use App\Modules\Properties\Presentation\Resources\UbigeoResource;
use App\Modules\Properties\Presentation\Resources\AmenityResource;
use App\Modules\Categories\Domain\Models\Category;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CreatePropertyController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Properties::Create', [
            'ubigeos' => UbigeoResource::collection(Ubigeo::select('id', 'district', 'province', 'department')->get()),
            'amenities' => AmenityResource::collection(Amenity::all()),
            'categories' => Category::where('company_id', Auth::user()->company_id)->where('type', 'property')->get(['id', 'name']),
        ]);
    }
}
