import { kanbanCardProps } from "@/typeScript/Type"
import { Card, CardContent } from "@/components/ui/card"


export default function KanbanCard({ content }: kanbanCardProps) {
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
            <Card className="shadow-sm">
                <CardContent className="p-3">
                    <p className="text-sm "> {content}</p>
                </CardContent>
            </Card>
        </>
    )
}