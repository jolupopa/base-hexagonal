<?php

namespace App\Modules\Analytics\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Analytics\Domain\Models\Metric;
use Illuminate\Support\Collection;

class GetCompanyInsightsAction extends BaseAction
{
    public function __construct(
        protected string $companyId,
        protected array $keys = [],
        protected string $period = 'daily'
    ) {}

    public function execute(): Collection
    {
        return Metric::where('company_id', $this->companyId)
            ->where('period', $this->period)
            ->when(!empty($this->keys), fn($q) => $q->whereIn('key', $this->keys))
            ->orderBy('date', 'desc')
            ->limit(30)
            ->get();
    }
}
