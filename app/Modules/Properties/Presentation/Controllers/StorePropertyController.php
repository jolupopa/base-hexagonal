<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Application\Actions\StorePropertyAction;
use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StorePropertyController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'required|string|in:house,apartment,commercial,land,office',
            'operation' => 'required|string|in:sale,rent',
            'price' => 'required|numeric|min:0',
            'currency' => 'required|string|size:3',
            'area_total' => 'required|numeric|min:0',
            'area_built' => 'nullable|numeric|min:0',
            'bedrooms' => 'nullable|integer|min:0',
            'bathrooms' => 'nullable|integer|min:0',
            'parking_spots' => 'nullable|integer|min:0',
            'address' => 'required|string|max:255',
            'ubigeo_id' => 'required|string|max:6',
            'category_id' => 'nullable|uuid|exists:categories,id',
            'amenities' => 'nullable|array',
            'amenities.*' => 'uuid|exists:amenities,id',
            'images' => 'nullable|array',
            'images.*' => 'image|max:5120', // 5MB max
        ]);

        $user = Auth::user();
        
        // Enforce property limit (Admins & Superadmins bypass)
        $isAdmin = $user->roles->contains('slug', 'admin') || $user->email === 'superusuario@demo.com';
        
        if (!$isAdmin) {
            $currentCount = Property::where('user_id', $user->id)->count();
            if ($currentCount >= $user->property_limit) {
                return back()->with('error', "Limit reached. You have {$currentCount} of {$user->property_limit} properties allowed. Contact admin to increase your quota.");
            }
        }

        $data['company_id'] = $user->company_id;
        $data['user_id'] = $user->id;

        $images = $request->file('images', []);

        (new StorePropertyAction($data, $images))->execute();

        return redirect()->route('properties.index')->with('success', 'Propiedad creada con éxito.');
    }
}
