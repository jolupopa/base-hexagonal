<?php

namespace App\Modules\Properties\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Properties\Domain\Models\PropertyInquiry;
use Illuminate\Support\Facades\DB;

class ProcessPropertyInquiryAction extends BaseAction
{
    public function __construct(
        protected array $data
    ) {}

    public function execute(): PropertyInquiry
    {
        return DB::transaction(function () {
            $inquiry = PropertyInquiry::create($this->data);
            
            // TODO: Send notification to agent
            // $inquiry->property->agent->notify(new PropertyInquiryNotification($inquiry));

            return $inquiry;
        });
    }
}
