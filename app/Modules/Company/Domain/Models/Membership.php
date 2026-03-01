<?php

namespace App\Modules\Company\Domain\Models;

use App\Core\BaseModel;
use App\Modules\Auth\Domain\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Membership extends BaseModel
{
    protected $fillable = [
        'company_id',
        'user_id',
        'role',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
