<?php

namespace App\Modules\Properties\Domain\Models;

use App\Core\BaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ubigeo extends BaseModel
{
    use SoftDeletes;

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
