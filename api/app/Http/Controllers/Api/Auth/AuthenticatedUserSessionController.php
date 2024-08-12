<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\AuthenticatedUserSessionRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedUserSessionController extends Controller
{
    public function store(AuthenticatedUserSessionRequest $request)
    {
        // Valider les données de la requête
        $validated = $request->validated();

        // Authentifier l'utilisateur avec les informations fournies
        if (Auth::attempt($validated)) {

            // Récupérer l'utilisateur authentifié
            $user = $request->user();

            // Générer un token d'authentification pour l'utilisateur
            $token = $user->createToken('auth_token')->plainTextToken;

            // Retourner une réponse JSON avec l'utilisateur authentifié et le token
            return response()->json([
                'token' => $token,
                'user' => $user,
                'message' => 'User a été authentifié avec succès.'
            ], 200);
            
        } else {
            // Retourner une réponse JSON avec un message d'erreur
            return response()->json([
                'message' => 'Les informations d\'authentification fournies sont incorrectes.'
            ], 401);
        }
    }

    // public function verifyToken(Request $request)
    // {
    //     // Retourner une réponse JSON avec l'utilisateur authentifié
    //     return response()->json([
    //         'message' => 'Token valide.',
    //     ], 200);
    // }

    public function destroy(Request $request)
    {
        // Révoquer le token d'authentification de l'utilisateur
        $request->user()->currentAccessToken()->delete();

        // Retourner une réponse JSON avec un message de succès
        return response()->json([
            'message' => 'Token a été révoqué avec succès.'
        ], 200);
    }
}