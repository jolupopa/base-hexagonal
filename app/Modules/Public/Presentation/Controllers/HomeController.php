<?php

namespace App\Modules\Public\Presentation\Controllers;

use App\Core\BaseAction;
use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Categories\Domain\Models\Category;
use App\Modules\Properties\Presentation\Resources\PropertyResource;
use Inertia\Inertia;
use Inertia\Response;

class HomeController
{
    public function __invoke(): Response
    {
        return Inertia::render('Public::Welcome', [
            'featured' => PropertyResource::collection(
                Property::where('status', 'published')
                    ->where('is_featured', true)
                    ->with(['category', 'media'])
                    ->limit(6)
                    ->get()
            ),
            'categories' => Category::all(['id', 'name']),
            'amenities' => \App\Modules\Properties\Domain\Models\Amenity::all(['id', 'name']),
        ]);
    }
}
