<?php

namespace App\Modules\Properties\Domain\Models;

use App\Core\BaseModel;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyInquiry extends BaseModel
{
    use SoftDeletes;

    protected $fillable = [
        'company_id',
        'property_id',
        'user_id',
        'name',
        'email',
        'phone',
        'message',
        'visit_date',
        'status',
        'metadata',
    ];

    protected $casts = [
        'visit_date' => 'datetime',
        'metadata' => 'array',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
