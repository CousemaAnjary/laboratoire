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
        // Charger le rôle avec ses utilisateurs associés
        $role = Role::with('users')->find($id);

        // Retourner les données du rôle et ses utilisateurs
        return response()->json([
            'role' => $role,
            'message' => 'Liste des utilisateurs du rôle récupérée avec succès.',
        ], 200);
    }
}