<?php

namespace App\Traits;

use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait HasCompany
{
    /**
     * Boot the HasCompany trait.
     * 
     * Aplica un scope global para filtrar por la compañía del usuario autenticado.
     */
    protected static function bootHasCompany(): void
    {
        static::creating(function ($model) {
            if (!$model->company_id && auth()->check()) {
                $model->company_id = auth()->user()->company_id;
            }
        });

        static::addGlobalScope('company', function (Builder $builder) {
            if (auth()->check() && !app()->runningInConsole()) {
                $builder->where('company_id', auth()->user()->company_id);
            }
        });
    }

    /**
     * Relación con la compañía.
     */
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
