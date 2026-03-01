<?php

namespace App\Modules\Properties\Domain\Models;

use App\Core\BaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Ubigeo extends BaseModel
{

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'department',
        'province',
        'district',
        'latitude',
        'longitude',
    ];
}
