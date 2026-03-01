<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Domain\Models\Ubigeo;
use App\Modules\Properties\Domain\Models\Amenity;
use Inertia\Inertia;

class CreatePropertyController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Properties::Create', [
            'ubigeos' => Ubigeo::select('id', 'district', 'province')->get(),
            'amenities' => Amenity::select('id', 'name')->get(),
        ]);
    }
}
