<?php

namespace App\Modules\Properties\Domain\Models;

use App\Core\BaseModel;
use App\Traits\HasCompany;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Projects\Domain\Models\Project;
use App\Modules\Categories\Domain\Models\Category;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

use App\Traits\HasModularFactory;

class Property extends BaseModel implements HasMedia
{
    use HasCompany, InteractsWithMedia, HasFactory, HasModularFactory {
        HasModularFactory::newFactory insteadof HasFactory;
    }

    protected $fillable = [
        'company_id',
        'user_id',
        'project_id',
        'category_id',
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
        'status',
        'is_featured',
        'metadata',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'area_total' => 'decimal:2',
        'area_built' => 'decimal:2',
        'metadata' => 'array',
        'is_featured' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
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
