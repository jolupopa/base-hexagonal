<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Modules\Auth\Domain\Models\User;

$user = User::where('email', 'superusuario@demo.com')->first();
if ($user) {
    echo "User found: " . $user->name . "\n";
    echo "Roles slugs: " . implode(', ', $user->roles->pluck('slug')->toArray()) . "\n";
    echo "Permissions slugs: " . implode(', ', $user->roles->flatMap->permissions->pluck('slug')->toArray()) . "\n";
} else {
    echo "User not found\n";
}
