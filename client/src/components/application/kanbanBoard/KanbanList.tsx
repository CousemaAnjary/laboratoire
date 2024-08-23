import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Ellipsis, PlusIcon, X } from "lucide-react";
import KanbanCard from "./KanbanCard"; // Assurez-vous que le chemin est correct
import { Input } from "@/components/ui/input";

interface KanbanListProps {
    title: string;
}

export default function KanbanList({ title }: KanbanListProps) {
    /**
     * ! STATE (état, données) de l'application
     */

    const [isAdding, setIsAdding] = useState(false)
    const [cards, setCards] = useState<string[]>([])
    const [newCardContent, setNewCardContent] = useState("")

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const addCard = () => {
        if (newCardContent.trim() !== "") {
            setCards([...cards, newCardContent])
            setNewCardContent("")
        }
        setIsAdding(false)
    }

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Card className="flex flex-col w-full max-w-72">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">{title}</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Ellipsis className="h-4 w-4" />
                </Button>
            </CardHeader>

            <CardContent className="flex-1 space-y-2 px-4 py-1 overflow-auto">
                {cards.map((content, index) => (
                    <KanbanCard key={index} content={content} />
                ))}

                {isAdding && (
                    <div className="flex flex-col justify-between h-full ">
                        <Input
                            type="text"
                            placeholder="Écrire quelque chose..."
                            value={newCardContent}
                            onChange={(e) => setNewCardContent(e.target.value)}
                            className="w-full h-14"
                        />
                        <div className="grid grid-cols-6 gap-2 mt-3">
                            <Button size={"sm"} onClick={addCard} className="col-span-5 w-full rounded-sm">
                                Ajouter
                            </Button>

                            <Button variant="outline" size={"sm"} onClick={() => setIsAdding(false)} className="w-full p-2 rounded-sm">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>

            <CardFooter className="px-4 mt-2">
                {!isAdding && (
                    <Button
                        variant="outline"
                        size={"sm"}
                        className="w-full justify-start font-medium"
                        onClick={() => setIsAdding(true)}
                    >
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Ajouter une carte
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
