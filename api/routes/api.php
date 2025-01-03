<?php

use App\Http\Controllers\Api\Auth\AuthenticatedUserSessionController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth
Route::post('/register', [RegisterController::class, 'store']);
Route::post('/login', [AuthenticatedUserSessionController::class, 'store']);

// Authenticated routes
Route::middleware('auth:sanctum')->group(function () {
    // Route::get('is-authenticated', [AuthenticatedUserSessionController::class, 'verifyToken']);
    Route::post('logout', [AuthenticatedUserSessionController::class, 'destroy']);
   
});

// superAdmin routes
Route::middleware(['auth:sanctum', 'role:superAdministration'])->group(function () {
    Route::get('/roles', [RoleController::class, 'index']);
    Route::get('/roles/{id}/users', [RoleController::class, 'users']);
});



// // admin routes 
// Route::middleware(['auth:sanctum', 'role:administration'])->group(function () {
   
// });

// // user routes
// Route::middleware(['auth:sanctum', 'role:utilisateur'])->group(function () {});