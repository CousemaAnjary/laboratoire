<?php

namespace App\Http\Controllers\Api\Application;

use App\Models\KanbanList;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Application\KanbanListRequest;

class KanbanController extends Controller
{
    public function getKanbanLists(Request $request)
    {
        // Récupérer les listes de kanban
        $kanbanLists = KanbanList::all();

        return response()->json([
            'message' => 'Listes de kanban récupérées avec succès',
            '$kanbanLists' => $kanbanLists
        ], 200);
    }

    public function storeKanbanList(KanbanListRequest $request)
    {
        // Valider les données de la requête
        $validated = $request->validated();

        // Créer une nouvelle liste de kanban
        $kanbanList = KanbanList::create($validated);

        return response()->json([
            'message' => 'Liste de kanban créée avec succès',
            'kanbanList' => $kanbanList
        ], 201);
    }
}