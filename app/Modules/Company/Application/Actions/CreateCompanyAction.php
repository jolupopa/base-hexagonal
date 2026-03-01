<?php

namespace App\Modules\Company\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Support\Str;

class CreateCompanyAction extends BaseAction
{
    public function __construct(
        protected string $name,
        protected array $settings = []
    ) {}

    public function execute(): Company
    {
        return Company::create([
            'name' => $this->name,
            'slug' => Str::slug($this->name) . '-' . Str::random(5),
            'settings' => $this->settings,
        ]);
    }
}
