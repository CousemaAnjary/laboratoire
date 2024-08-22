interface KanbanListProps {
    title: string;
    children?: React.ReactNode;
}

export default function KanbanList({ title, children }: KanbanListProps) {
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
            <div className="bg-white rounded-md shadow-md p-4 w-80">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">{title}</h2>
                    {/* Icons or buttons for more actions */}
                    <div className="flex space-x-2">
                        {/* Add icons or buttons here */}
                    </div>
                </div>
                <div className="space-y-2">
                    {children}
                </div>
                <button className="mt-4 text-blue-500 hover:text-blue-700">
                    + Ajouter une carte
                </button>
            </div>
        </>
    )
}