<?php

namespace App\Modules\Properties\Domain\Models;

use App\Core\BaseModel;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Modules\Categories\Domain\Models\Category;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Database\Factories\PropertyFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Property extends BaseModel implements HasMedia
{
    use SoftDeletes, InteractsWithMedia, HasFactory;

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(400)
            ->height(300)
            ->sharpen(10)
            ->nonQueued();
    }

    protected static function newFactory()
    {
        return PropertyFactory::new();
    }

    protected $fillable = [
        'company_id',
        'user_id',
        'category_id',
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

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function inquiries(): HasMany
    {
        return $this->hasMany(PropertyInquiry::class);
    }

    /**
     * Scopes para buscador profesional
     */
    public function scopeSearch($query, ?string $search)
    {
        return $query->when($search, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('title', 'ilike', "%{$search}%")
                    ->orWhere('description', 'ilike', "%{$search}%")
                    ->orWhere('address', 'ilike', "%{$search}%");
            });
        });
    }

    public function scopeFilter($query, array $filters)
    {
        return $query->when($filters['type'] ?? null, fn($q, $v) => $q->where('type', $v))
            ->when($filters['operation'] ?? null, fn($q, $v) => $q->where('operation', $v))
            ->when($filters['category_id'] ?? null, fn($q, $v) => $q->where('category_id', $v))
            ->when($filters['min_price'] ?? null, fn($q, $v) => $q->where('price', '>=', $v))
            ->when($filters['max_price'] ?? null, fn($q, $v) => $q->where('price', '<=', $v))
            ->when($filters['bedrooms'] ?? null, fn($q, $v) => $q->where('bedrooms', '>=', $v))
            ->when($filters['bathrooms'] ?? null, fn($q, $v) => $q->where('bathrooms', '>=', $v))
            ->when($filters['is_featured'] ?? null, fn($q, $v) => $q->where('is_featured', $v));
    }

    public function scopeWithAmenities($query, array $amenityIds)
    {
        return $query->when($amenityIds, function ($q) use ($amenityIds) {
            foreach ($amenityIds as $id) {
                $q->whereHas('amenities', fn($q) => $q->where('amenities.id', $id));
            }
        });
    }
}
