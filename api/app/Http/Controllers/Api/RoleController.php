<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    /**
     * Retourne la liste des rôles avec leurs permissions associées.
     */
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
}