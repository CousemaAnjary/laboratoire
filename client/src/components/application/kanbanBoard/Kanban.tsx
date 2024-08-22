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
            <div className="flex space-x-4 p-4 overflow-x-auto items-start">
                <KanbanList title="À faire">
                    <KanbanCard content="Définir les spécifications du projet" />
                    <KanbanCard content="Créer la structure de la base de données" />
                    <KanbanCard content="Configurer l'environnement de développement" />
                </KanbanList>

                <KanbanList title="En cours">
                    <KanbanCard content="Implémenter l'authentification des utilisateurs" />
                    <KanbanCard content="Développer les API REST pour les opérations CRUD" />
                    <KanbanCard content="Concevoir l'interface utilisateur pour le tableau de bord" />
                    <KanbanCard content="Configurer le routage dans l'application" />
                    <KanbanCard content="Intégrer la gestion des erreurs et des exceptions" />
                </KanbanList>

                <KanbanList title="Terminé">
                </KanbanList>


                {/* Option to add another list  */}
                <Button variant={'outline'} className="w-72 justify-start items-center">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Ajouter une autre liste
                </Button>

            </div>
        </>
    )
}