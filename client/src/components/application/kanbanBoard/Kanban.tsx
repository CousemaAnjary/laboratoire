import KanbanList from './KanbanList'
import KanbanCard from './KanbanCard'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

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
            <div className="flex space-x-4 p-4 overflow-x-auto ">
                <KanbanList title="À faire">

                </KanbanList>

                <KanbanList title="En cours">
                    <KanbanCard content="Tâche 1" />
                    <KanbanCard content="Tâche 2" />
                </KanbanList>

                <KanbanList title="Terminé">
                    <KanbanCard content="Tâche 3" />
                </KanbanList>

                {/* Option to add another list  */}
                <Button variant={'outline'} className="w-72 justify-start">
                    <PlusIcon className="mr-2 h-3 w-3" />
                     Ajouter une autre liste
                </Button>

            </div>
        </>
    )
}