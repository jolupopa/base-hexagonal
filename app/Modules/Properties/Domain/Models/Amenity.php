<?php

namespace App\Modules\Properties\Domain\Models;

use App\Core\BaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Amenity extends BaseModel
{
    protected $fillable = [
        'name',
        'icon',
    ];

    public function properties(): BelongsToMany
    {
        return $this->belongsToMany(Property::class);
    }
}
