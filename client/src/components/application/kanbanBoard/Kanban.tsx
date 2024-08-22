import KanbanList from './KanbanList';
import KanbanCard from './KanbanCard';

export default function Kanban() {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div className="flex space-x-4 p-4 overflow-x-auto">
                <KanbanList title="À faire">
                  
                </KanbanList>

                <KanbanList title="En cours">
                    <KanbanCard content="Tâche 1" />
                    <KanbanCard content="Tâche 2" />
                </KanbanList>

                <KanbanList title="Terminé">
                    <KanbanCard content="Tâche 3" />
                </KanbanList>

                {/* Option to add another list */}
                <div className="bg-gray-100 rounded-md shadow-md p-4 w-80 flex items-center justify-center">
                    <button className="text-blue-500 hover:text-blue-700">
                        + Ajouter une autre liste
                    </button>
                </div>
            </div>
        </>
    )
}