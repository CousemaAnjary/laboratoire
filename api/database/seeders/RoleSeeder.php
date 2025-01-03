<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Permission;

class RoleSeeder extends Seeder
{
    public function run()
    {
        // Créer les rôles
        $roles = [
            'superAdministration' => 'Super Administrateur avec accès complet',
            'administration' => 'Administrateur avec accès restreint',
            'utilisateur' => 'Utilisateur standard avec accès limité',
        ];

        foreach ($roles as $name => $description) {
            Role::firstOrCreate(['name' => $name], ['description' => $description]);
        }

        // Créer les permissions générales
        $permissions = [
            'view_users' => 'Voir la liste des utilisateurs',
            'edit_users' => 'Modifier les utilisateurs',
            'access_dashboard' => 'Accéder au tableau de bord',
            'manage_admin_permissions' => 'Gérer les permissions des administrateurs',
            'read_articles' => 'Lire les articles',
            'write_articles' => 'Écrire des articles',
            'edit_articles' => 'Modifier des articles',
            'delete_articles' => 'Supprimer des articles',
        ];

        foreach ($permissions as $name => $description) {
            Permission::firstOrCreate(['name' => $name], ['description' => $description]);
        }

        // Récupérer les rôles
        $superAdmin = Role::where('name', 'superAdministration')->first();
        $admin = Role::where('name', 'administration')->first();
        $user = Role::where('name', 'utilisateur')->first();

        // Récupérer toutes les permissions
        $allPermissions = Permission::all();

        // Assigner toutes les permissions au superAdmin
        foreach ($allPermissions as $permission) {
            $superAdmin->permissions()->attach($permission->id);
        }

        // Permissions spécifiques pour l'administrateur
        $adminPermissions = [
            'view_users',
            'access_dashboard',
            'read_articles',
            'write_articles',
            'edit_articles',
        ];
        foreach ($adminPermissions as $permissionName) {
            $permission = Permission::where('name', $permissionName)->first();
            if ($permission) {
                $admin->permissions()->attach($permission->id);
            }
        }

        // Permissions spécifiques pour l'utilisateur
        $userPermissions = [
            'read_articles',
        ];
        foreach ($userPermissions as $permissionName) {
            $permission = Permission::where('name', $permissionName)->first();
            if ($permission) {
                $user->permissions()->attach($permission->id);
            }
        }
    }
}