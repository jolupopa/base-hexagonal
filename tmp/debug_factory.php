<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Modules\Properties\Domain\Models\Property;

echo "Class basename: " . class_basename(Property::class) . "\n";
$factoryName = 'Database\\Factories\\' . class_basename(Property::class) . 'Factory';
echo "Expected factory: " . $factoryName . "\n";
echo "Class exists: " . (class_exists($factoryName) ? 'Yes' : 'No') . "\n";

try {
    echo "Attempting to get factory...\n";
    $factory = Property::factory();
    echo "Success!\n";
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " at line " . $e->getLine() . "\n";
}
