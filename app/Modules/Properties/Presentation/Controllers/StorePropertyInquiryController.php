<?php

namespace App\Modules\Properties\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Properties\Application\Actions\ProcessPropertyInquiryAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StorePropertyInquiryController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'property_id' => 'required|uuid|exists:properties,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'message' => 'nullable|string',
            'visit_date' => 'nullable|date|after:today',
        ]);

        $data['company_id'] = $request->input('company_id') ?? Auth::user()?->company_id;
        $data['user_id'] = Auth::id();
        $data['status'] = $request->filled('visit_date') ? 'scheduled' : 'pending';

        (new ProcessPropertyInquiryAction($data))->execute();

        return back()->with('success', 'Tu consulta ha sido enviada con éxito.');
    }
}
