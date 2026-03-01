<?php

namespace App\Modules\Company\Domain\Models;

use App\Core\BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Company extends BaseModel
{
    use SoftDeletes, HasFactory;

    protected static function newFactory()
    {
        return \Database\Factories\CompanyFactory::new();
    }

    protected $fillable = [
        'name',
        'slug',
        'settings',
    ];

    protected $casts = [
        'settings' => 'array',
    ];
}
