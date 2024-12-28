<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::with('permissions')->get(); // Inclure les permissions si nécessaire

        // Retourner une réponse JSON avec les rôles
        return response()->json([
            'roles' => $roles,
            'message' => 'Liste des rôles récupérée avec succès'
        ], 200);
    }
}