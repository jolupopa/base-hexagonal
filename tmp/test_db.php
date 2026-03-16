<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

echo "Laravel Bootstrapped\n";

use Illuminate\Support\Facades\Schema;
try {
    echo "Checking connection...\n";
    $tables = Schema::getAllTables();
    echo "Tables found: " . count($tables) . "\n";
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}

echo "Done\n";
