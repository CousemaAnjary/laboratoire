<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    public function index()
    {
        // Charger les rôles avec leurs permissions associées
        $roles = Role::with('permissions')
        ->withCount('users') // Compter le nombre d'utilisateurs associés
        ->get();


        // Retourner les données des rôles et permissions
        return response()->json([
            'roles' => $roles,
            'message' => 'Liste des rôles récupérée avec succès.',
        ], 200);
    }

    public function users($id)
    {
        // Vérifie si le rôle existe
        $role = Role::find($id);

        if (!$role) {
            return response()->json([
                'message' => 'Rôle non trouvé.'
            ], 404);
        }

        // Charger les utilisateurs associés au rôle
        $users = $role->users; // Assure-toi que la relation `users` existe dans le modèle Role

        // Retourner les données des utilisateurs
        return response()->json([
            'users' => $users,
            'message' => 'Liste des utilisateurs du rôle récupérée avec succès.',
        ], 200);
    }
}