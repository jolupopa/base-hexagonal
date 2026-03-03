<?php

namespace Database\Seeders;

use App\Modules\ACL\Domain\Models\Permission;
use App\Modules\ACL\Domain\Models\Role;
use App\Modules\Auth\Domain\Models\User;
use App\Modules\Company\Domain\Models\Company;
use Illuminate\Database\Seeder;

class ACLSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 0. Asegurar Empresa (Core Principle: Todo pertenece a una Company)
        $company = Company::firstOrCreate([
            'slug' => 'estatemanager-system',
        ], [
            'name' => 'EstateManager System',
            'settings' => ['theme' => 'dark']
        ]);

        // 1. Crear Roles
        $adminRole = Role::firstOrCreate([
            'slug' => 'admin',
        ], [
            'name' => 'Administrador Global',
            'description' => 'Acceso total al sistema y configuraciones'
        ]);

        $companyRole = Role::firstOrCreate([
            'slug' => 'company',
        ], [
            'name' => 'Empresa Inmobiliaria',
            'description' => 'Administrador de su propia organización'
        ]);

        $agentRole = Role::firstOrCreate([
            'slug' => 'agent',
        ], [
            'name' => 'Agente Inmobiliario',
            'description' => 'Gestión de propiedades y leads'
        ]);

        $ownerRole = Role::firstOrCreate([
            'slug' => 'owner',
        ], [
            'name' => 'Propietario',
            'description' => 'Consulta de estado de sus propiedades'
        ]);

        // 2. Crear Permisos Básicos
        $permissionsList = [
            ['name' => 'Ver Dashboard', 'slug' => 'dashboard.view'],
            ['name' => 'Gestionar Usuarios', 'slug' => 'users.manage'],
            ['name' => 'Gestionar Propiedades', 'slug' => 'properties.manage'],
            ['name' => 'Ver Reportes', 'slug' => 'reports.view'],
            ['name' => 'Gestionar Facturación', 'slug' => 'billing.manage'],
        ];

        foreach ($permissionsList as $p) {
            $permission = Permission::firstOrCreate(['slug' => $p['slug']], $p);
            
            // Asignar casi todo al admin y empresa
            if (! $adminRole->permissions->contains($permission->id)) {
                $adminRole->permissions()->attach($permission);
            }
            
            if ($p['slug'] !== 'users.manage' && ! $companyRole->permissions->contains($permission->id)) {
                $companyRole->permissions()->attach($permission);
            }

            if (in_array($p['slug'], ['dashboard.view', 'properties.manage']) && ! $agentRole->permissions->contains($permission->id)) {
                $agentRole->permissions()->attach($permission);
            }
        }

        // 3. Crear SuperUsuario (si no existe)
        $admin = User::firstOrCreate(
            ['email' => 'superusuario@demo.com'],
            [
                'company_id'   => $company->id,
                'name'         => 'Super Admin',
                'password'     => bcrypt('password'),
                'email_verified_at' => now(),
            ]
        );

        $admin->roles()->syncWithoutDetaching([$adminRole->id]);
    }
}
