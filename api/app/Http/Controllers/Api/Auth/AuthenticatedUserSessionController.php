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
                'user' => $user,
                'message' => 'User a été authentifié avec succès.'
            ], 200)->cookie('auth_token',  $token, 60 * 24, '/', null, env('APP_ENV') !== 'local', true); // Nom du cookie, Valeur du cookie (token), Durée de vie (1 jour), Chemin (tout le site), Domaine (domaine actuel), Secure (true pour HTTPS en production, false en local), HttpOnly (inaccessible via JavaScript)

        } else {
            // Retourner une réponse JSON avec un message d'erreur
            return response()->json([
                'message' => 'Les informations d\'authentification fournies sont incorrectes.'
            ], 401);
        }
    }
}