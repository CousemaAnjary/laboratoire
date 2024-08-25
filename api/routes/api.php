<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Auth\GoogleAuthController;
use App\Http\Controllers\Api\Application\KanbanController;
use App\Http\Controllers\Api\Auth\AuthenticatedUserSessionController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Auth
Route::post('/register', [RegisterController::class, 'store']);
Route::post('login', [AuthenticatedUserSessionController::class, 'store']);

// Google Auth
// Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirect']);
// Route::get('/auth/google/callback', [GoogleAuthController::class, 'callback']);

// Authenticated routes
Route::middleware('auth:sanctum')->group(function () {
    // Route::get('auth/verify-token', [AuthenticatedUserSessionController::class, 'verifyToken']);
    Route::post('logout', [AuthenticatedUserSessionController::class, 'destroy']);

    // Routes pour le kanban
    Route::get('kanbanLists', [KanbanController::class, 'getKanbanLists']);
    Route::post('kanbanList', [KanbanController::class, 'storeKanbanList']);
    Route::get('kanbanCards/{listId}', [KanbanController::class, 'getKanbanCards']);
    Route::post('kanbanCard', [KanbanController::class, 'storeKanbanCard']);
});