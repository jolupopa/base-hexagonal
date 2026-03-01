<?php

namespace App\Modules\Public\Presentation\Controllers;

use App\Core\BaseAction;
use Inertia\Inertia;
use Inertia\Response;

class HomeController
{
    public function __invoke(): Response
    {
        return Inertia::render('Public::Welcome');
    }
}
