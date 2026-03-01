<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Welcome');
});

Route::post('/companies', \App\Modules\Company\Presentation\Controllers\StoreCompanyController::class)
    ->name('companies.store');
