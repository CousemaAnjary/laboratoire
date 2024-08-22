import { Card, CardContent } from "@/components/ui/card";

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
            <Card>
                <CardContent className="p-2">
                    <p className="text-sm"> {content}</p>
                </CardContent>
            </Card>
        </>
    )
}