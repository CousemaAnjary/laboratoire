<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        // Rediriger l'utilisateur vers la page de connexion Google
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function callback(Request $request)
    {
        // Récupérer les informations de l'utilisateur
        $googleUser = Socialite::driver('google')->stateless()->user();

        // Vérifier si l'utilisateur existe déjà
        $user = User::where('email', $googleUser->getEmail())->first();

        if ($user) {
            // Si l'utilisateur existe, le connecter
            Auth::login($user);
            
        } else {
            // Si l'utilisateur n'existe pas, le créer
            $user = User::create([
                'first_name' => $googleUser->user['given_name'],
                'last_name' => $googleUser->user['family_name'],
                'email' => $googleUser->getEmail(),
                'password' => bcrypt(Str::random(24)),
                'image' => $googleUser->getAvatar(),
                'google_id' => $googleUser->getId(),
            ]);

            // Connecter l'utilisateur
            Auth::login($user);
        }

        // Générer un token pour l'utilisateur connecté
        $token = $user->createToken('auth_token')->plainTextToken;

        // Retourner une réponse JSON avec le token et les informations de l'utilisateur
        return response()->json([
            'token' => $token,
            'user' => $user,
        ]);
    }
}