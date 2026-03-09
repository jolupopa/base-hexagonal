<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Http\Request;

class ForceDeletePropertyController extends Controller
{
    public function __invoke(string $id)
    {
        $user = auth()->user();
        // Only admin or superadmin can force delete
        if (!$user->roles->contains('slug', 'admin') && $user->email !== 'superusuario@demo.com') {
            abort(403);
        }

        $property = Property::withTrashed()->findOrFail($id);
        $property->forceDelete();

        return back()->with('success', 'Property permanently deleted.');
    }
}
