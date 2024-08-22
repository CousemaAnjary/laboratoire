interface KanbanCardProps {
    content: string;
}

export default function KanbanCard({ content }: KanbanCardProps) {
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
            <div className="bg-gray-100 rounded-md p-3 shadow-sm">
                {content}
            </div>
        </>
    )
}