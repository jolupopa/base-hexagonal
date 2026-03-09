<?php

namespace App\Modules\Properties\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Support\Facades\DB;

class UpdatePropertyAction extends BaseAction
{
    public function __construct(
        protected Property $property,
        protected array $data,
        protected array $images = []
    ) {}

    public function execute(): Property
    {
        return DB::transaction(function () {
            $this->property->update($this->data);

            if (isset($this->data['amenities'])) {
                $this->property->amenities()->sync($this->data['amenities']);
            }

            foreach ($this->images as $image) {
                $this->property->addMedia($image)->toMediaCollection('gallery');
            }

            return $this->property;
        });
    }
}
