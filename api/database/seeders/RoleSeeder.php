<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    public function run()
    {
        // Créer les rôles
        $superAdmin = Role::firstOrCreate(['name' => 'superAdmin']);
        $admin = Role::firstOrCreate(['name' => 'admin']);
        $user = Role::firstOrCreate(['name' => 'user']);

        // Créer les permissions
        Permission::firstOrCreate(['name' => 'view_users']);
        Permission::firstOrCreate(['name' => 'edit_users']);
        Permission::firstOrCreate(['name' => 'access_dashboard']);
        Permission::firstOrCreate(['name' => 'manage_admin_permissions']);

        // Assigner des permissions aux rôles
        $superAdmin->syncPermissions(Permission::all());
        $admin->syncPermissions(['view_users', 'access_dashboard']);
    }
}