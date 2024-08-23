import KanbanList from './KanbanList'
import { PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'


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
            <div className="flex space-x-4 p-4 overflow-x-auto items-start">
                {/* Listes Kanban */}
                <KanbanList title="À faire" />
                <KanbanList title="En cours" />
                <KanbanList title="Terminé" />

                {/* Option to add another list */}
                <Button variant={'outline'} className="w-72 justify-start items-center">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Ajouter une autre liste
                </Button>
            </div>
        </>
    )
}