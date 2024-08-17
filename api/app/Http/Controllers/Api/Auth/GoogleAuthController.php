<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect(): JsonResponse
    {
        // Récupérer l'URL de redirection de Google
        return response()->json([
            'url' => Socialite::driver('google')->stateless()->redirect()->getTargetUrl(),
        ]);
    }

    public function callback(Request $request): JsonResponse
    {

        try {
            // Récupérer les informations de l'utilisateur
            $googleUser = Socialite::driver('google')->stateless()->user();
            
        } catch (ClientException $e) {
            return response()->json(['error' => 'Invalid credentials provided.'], 422);
        }

        // Vérifier si l'utilisateur existe
        $user = User::where('email',  $googleUser->email())->first();

        // Si l'utilisateur n'existe pas, on le crée
        if (!$user) {

            $user = User::create([
                'first_name' => $googleUser->user['given_name'],
                'last_name' => $googleUser->user['family_name'],
                'email' => $googleUser->getEmail(),
                'password' => bcrypt(Str::random(24)),
                'image' => $googleUser->getAvatar(),
                'google_id' => $googleUser->getId(),
            ]);
        }

        // Générer un token pour l'utilisateur
        $token = $user->createToken('google-token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => $user,
        ]);
    }
}