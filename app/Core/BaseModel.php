<?php

namespace App\Core;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

use App\Traits\HasModularFactory;

abstract class BaseModel extends Model
{
    use HasUuids, HasModularFactory;
    
    /**
     * Generate a new UUID v7 for the model.
     */
    public function newUniqueId(): string
    {
        return (string) \Illuminate\Support\Str::uuid7();
    }
}
