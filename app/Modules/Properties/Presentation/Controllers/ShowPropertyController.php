<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Modules\Properties\Domain\Models\Property;
use App\Modules\Properties\Presentation\Resources\PropertyResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShowPropertyController
{
    public function __invoke(Request $request, string $id): Response
    {
        $property = Property::with(['agent', 'category', 'amenities', 'ubigeo', 'media'])
            ->where('status', 'published')
            ->findOrFail($id);

        // Security check for internal route
        if (request()->routeIs('properties.show')) {
            $user = auth()->user();
            $isAdmin = $user->roles->contains('slug', 'admin') || $user->email === 'superusuario@demo.com';
            
            if (!$isAdmin && $property->company_id !== $user->company_id) {
                abort(403);
            }
        }

        // Increment views count safely
        $property->increment('views_count');

        return Inertia::render('Public::PropertyShow', [
            'property' => new PropertyResource($property),
            'related' => PropertyResource::collection(
                Property::with(['category', 'media'])
                    ->where('category_id', $property->category_id)
                    ->where('id', '!=', $property->id)
                    ->where('status', 'published')
                    ->latest()
                    ->take(3)
                    ->get()
            )
        ]);
    }
}
