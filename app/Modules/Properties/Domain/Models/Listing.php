<?php

namespace App\Modules\Properties\Domain\Models;

use App\Core\BaseModel;
use App\Traits\HasCompany;
use App\Modules\Auth\Domain\Models\User;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Traits\HasModularFactory;

class Listing extends BaseModel
{
    use HasCompany, HasFactory, HasModularFactory {
        HasModularFactory::newFactory insteadof HasFactory;
    }

    protected $fillable = [
        'company_id',
        'listable_type',
        'listable_id',
        'price',
        'currency',
        'description',
        'status',
        'starts_at',
        'ends_at',
        'days_on_market',
        'price_history',
        'changes',
        'created_by',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'price_history' => 'array',
        'changes' => 'array',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
    ];

    public function listable(): MorphTo
    {
        return $this->morphTo();
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Scope para filtrar listings activos.
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active')
            ->where(function ($q) {
                $q->whereNull('ends_at')
                  ->orWhere('ends_at', '>', now());
            });
    }
}
