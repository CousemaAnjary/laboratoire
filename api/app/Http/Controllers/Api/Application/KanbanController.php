<?php

namespace App\Http\Controllers\Api\Application;

use App\Models\KanbanList;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Application\KanbanCardRequest;
use App\Http\Requests\Api\Application\KanbanListRequest;
use App\Models\KanbanCard;

class KanbanController extends Controller
{
    public function getKanbanLists(Request $request)
    {
        // Récupérer les listes de kanban
        $kanbanLists = KanbanList::all();

        return response()->json([
            'kanbanLists' => $kanbanLists,
            'message' => 'Listes de kanban récupérées avec succès'
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

    public function getKanbanCards(Request $request, $listID)
    {
        // // Récupérer les cartes de kanban
        // $kanbanList = KanbanList::find($listID);
        // $kanbanCards = $kanbanList->kanbanCards;

        // return response()->json([
        //     'kanbanCards' => $kanbanCards,
        //     'message' => 'Cartes de kanban récupérées avec succès'
        // ], 200);
    }

    public function storeKanbanCard(KanbanCardRequest $request)
    {
        // Valider les données de la requête
        $validated = $request->validated();

        // Créer une nouvelle carte de kanban
        $kanbanCard = KanbanCard::create($validated);

        return response()->json([
            'message' => 'Carte de kanban créée avec succès',
            'kanbanCard' => $kanbanCard
        ], 201);
    }
}