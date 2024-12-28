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
        $superAdmin = Role::firstOrCreate(['name' => 'superAdministration']);
        $admin = Role::firstOrCreate(['name' => 'administration']);
        $user = Role::firstOrCreate(['name' => 'utilisateur']);

        // Créer les permissions générales
        $permissions = [
            'view_users', // Voir les utilisateurs
            'edit_users', // Modifier les utilisateurs
            'access_dashboard', // Accéder au tableau de bord
            'manage_admin_permissions', // Gérer les permissions des administrateurs

            // Permissions supplémentaires
            'read_articles', // Lire les articles
            'write_articles', // Écrire des articles
            'edit_articles', // Modifier des articles
            'delete_articles', // Supprimer des articles
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Assigner toutes les permissions au superAdmin
        $superAdmin->syncPermissions(Permission::all());

        // Permissions pour l'administrateur
        $admin->syncPermissions([
            'view_users',
            'access_dashboard',
            'read_articles',
            'write_articles',
            'edit_articles',
        ]);

        // Permissions pour l'utilisateur
        $user->syncPermissions([
            'read_articles',
        ]);
    }
}