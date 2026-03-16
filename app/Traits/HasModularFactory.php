<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Factories\Factory;

trait HasModularFactory
{
    /**
     * Resolve the factory for the model.
     */
    protected static function newFactory()
    {
        $factoryName = 'Database\\Factories\\' . class_basename(get_called_class()) . 'Factory';
        
        if (class_exists($factoryName)) {
            return $factoryName::new();
        }

        return Factory::factoryForModel(get_called_class());
    }
}
