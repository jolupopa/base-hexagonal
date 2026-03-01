<?php

namespace App\Modules\Analytics\Domain\Models;

use App\Core\BaseModel;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Metric extends BaseModel
{
    protected $fillable = [
        'company_id',
        'key',
        'value',
        'period',
        'date',
        'metadata',
    ];

    protected $casts = [
        'value' => 'integer',
        'date' => 'date',
        'metadata' => 'array',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
