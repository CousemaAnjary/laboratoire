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
        $roles = Role::with('permissions')->get();

        // Retourner les données des rôles et permissions
        return response()->json([
            'roles' => $roles,
            'message' => 'Liste des rôles récupérée avec succès.',
        ], 200);
    }

    public function users($id)
    {
        // Vérifier si le rôle existe
        $role = Role::findOrFail($id);

        // Obtenir les utilisateurs associés au rôle
        $users = $role->users()->get();

        // Retourner la réponse JSON
        return response()->json([
            'users' => $users,
            'message' => 'Liste des utilisateurs récupérée avec succès'
        ], 200);
    }
}