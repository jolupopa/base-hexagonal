<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Support\Facades\Auth;

class DeletePropertyController extends Controller
{
    public function __invoke(Property $property)
    {
        abort_if($property->company_id !== Auth::user()->company_id, 403);

        $property->delete();

        return back()->with('success', 'Propiedad eliminada con éxito.');
    }
}
