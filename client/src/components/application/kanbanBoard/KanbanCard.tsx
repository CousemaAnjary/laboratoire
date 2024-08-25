import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Draggable } from "react-beautiful-dnd"
import { kanbanCardProps } from "@/typeScript/Kanban"
import { Card, CardContent } from "@/components/ui/card"


export default function KanbanCard({ card, index }: kanbanCardProps) {
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
          <Draggable draggableId={String(card.id)} index={index}>
                {(provided) => (
                    <div className="relative group"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >

                        <Card className="w-full cursor-pointer border shadow-sm  group-hover:border-slate-700 transition-all duration-300">
                            <CardContent className="p-1 pl-2 flex justify-between items-center">
                                <p className="text-sm break-words overflow-hidden text-ellipsis">{card.name}</p>
                                <Button
                                    variant={"ghost"}
                                    size={"sm"}
                                    className="ml-2 p-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                )}

            </Draggable>
        </>
    )
}