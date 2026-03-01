<?php

namespace App\Modules\Properties\Domain\Models;

use App\Core\BaseModel;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Property extends BaseModel
{
    use SoftDeletes;

    protected $fillable = [
        'company_id',
        'user_id',
        'ubigeo_id',
        'title',
        'description',
        'type',
        'operation',
        'price',
        'currency',
        'area_total',
        'area_built',
        'bedrooms',
        'bathrooms',
        'parking_spots',
        'address',
        'latitude',
        'longitude',
        'status',
        'is_featured',
        'metadata',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'area_total' => 'decimal:2',
        'area_built' => 'decimal:2',
        'is_featured' => 'boolean',
        'metadata' => 'array',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function agent(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function ubigeo(): BelongsTo
    {
        return $this->belongsTo(Ubigeo::class, 'ubigeo_id');
    }

    public function amenities(): BelongsToMany
    {
        return $this->belongsToMany(Amenity::class);
    }
}
