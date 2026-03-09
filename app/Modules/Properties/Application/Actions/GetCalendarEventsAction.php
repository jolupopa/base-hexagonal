<?php

namespace App\Modules\Properties\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Properties\Domain\Models\PropertyInquiry;
use Illuminate\Support\Collection;

class GetCalendarEventsAction extends BaseAction
{
    public function __construct(
        protected string $companyId,
        protected ?string $startDate = null,
        protected ?string $endDate = null
    ) {}

    public function execute(): Collection
    {
        return PropertyInquiry::query()
            ->where('company_id', $this->companyId)
            ->whereNotNull('visit_date')
            ->when($this->startDate, fn($q) => $q->where('visit_date', '>=', $this->startDate))
            ->when($this->endDate, fn($q) => $q->where('visit_date', '<=', $this->endDate))
            ->with('property:id,title')
            ->get()
            ->map(fn($inquiry) => [
                'id' => $inquiry->id,
                'title' => "Visita: {$inquiry->property->title}",
                'start' => $inquiry->visit_date->toISOString(),
                'start_display' => $inquiry->visit_date->format('H:i'),
                'end' => $inquiry->visit_date->copy()->addHour()->toISOString(),
                'type' => 'visit',
                'status' => $inquiry->status,
                'client' => $inquiry->name,
                'color' => '#FACC15', // Gold accent
            ]);
    }
}
