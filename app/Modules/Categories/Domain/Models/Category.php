<?php

namespace App\Modules\Categories\Domain\Models;

use App\Core\BaseModel;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Traits\HasModularFactory;
use App\Traits\HasCompany;

class Category extends BaseModel
{
    use HasCompany, HasFactory, HasModularFactory, SoftDeletes {
        HasModularFactory::newFactory insteadof HasFactory;
    }

    protected $fillable = [
        'company_id',
        'name',
        'slug',
        'type',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
