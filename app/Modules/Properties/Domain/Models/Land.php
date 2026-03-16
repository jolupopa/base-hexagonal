<?php

namespace App\Modules\Properties\Domain\Models;

use App\Core\BaseModel;
use App\Traits\HasCompany;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Projects\Domain\Models\Project;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Land extends BaseModel implements HasMedia
{
    use HasCompany, InteractsWithMedia;

    protected $fillable = [
        'company_id',
        'user_id',
        'title',
        'description',
        'area_total',
        'zoning',
        'price',
        'currency',
        'status',
        'metadata',
    ];

    protected $casts = [
        'area_total' => 'decimal:2',
        'price' => 'decimal:2',
        'metadata' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function address(): MorphOne
    {
        return $this->morphOne(Address::class, 'addressable');
    }

    public function listings(): MorphMany
    {
        return $this->morphMany(Listing::class, 'listable');
    }

    public function amenities(): MorphToMany
    {
        return $this->morphToMany(Amenity::class, 'amenityable', 'amenityables');
    }

    public function activeListing()
    {
        return $this->listings()->where('status', 'active')->latest()->first();
    }
}
