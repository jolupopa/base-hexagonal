<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Modules\Auth\Domain\Models\User;

$user = User::where('email', 'superusuario@demo.com')->first();
if ($user) {
    echo "--- User Info ---\n";
    echo "Name: " . $user->name . "\n";
    echo "Email: " . $user->email . "\n";
    
    echo "\n--- Roles ---\n";
    foreach($user->roles as $role) {
        echo " - " . $role->slug . " (" . $role->name . ")\n";
    }

    echo "\n--- Permissions (via Roles) ---\n";
    $permissions = $user->roles->flatMap->permissions->pluck('slug')->unique();
    foreach($permissions as $slug) {
        echo " - " . $slug . "\n";
    }

    echo "\n--- Shared Inertia Data Simulation ---\n";
    $sharedPermissions  = $user->roles->flatMap->permissions->pluck('slug')
        ->merge($user->permissions->pluck('slug'))
        ->unique()
        ->values();
    echo "Permissions Array: " . json_encode($sharedPermissions) . "\n";
} else {
    echo "User superusuario@demo.com not found. Did you run the seeders?\n";
}
