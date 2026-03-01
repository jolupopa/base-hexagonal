<?php

namespace App\Modules\Company\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Company\Application\Actions\CreateCompanyAction;
use App\Modules\Company\Presentation\Resources\CompanyResource;
use Illuminate\Http\Request;

class StoreCompanyController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'settings' => ['nullable', 'array'],
        ]);

        $action = new CreateCompanyAction(
            name: $request->input('name'),
            settings: $request->input('settings', [])
        );

        $company = $action->execute();

        return new CompanyResource($company);
    }
}
