<?php

namespace App\Modules\Properties\Application\Actions;

use App\Core\BaseAction;
use App\Modules\Properties\Domain\Models\Property;
use Illuminate\Support\Facades\DB;

class StorePropertyAction extends BaseAction
{
    public function __construct(
        protected array $data,
        protected array $images = []
    ) {}

    public function execute(): Property
    {
        return DB::transaction(function () {
            $property = Property::create($this->data);

            if (!empty($this->data['amenities'])) {
                $property->amenities()->sync($this->data['amenities']);
            }

            foreach ($this->images as $image) {
                $property->addMedia($image)->toMediaCollection('gallery');
            }

            return $property;
        });
    }
}
