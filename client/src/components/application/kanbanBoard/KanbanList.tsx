import KanbanCard from "./KanbanCard"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { KanbanListProps } from "@/typeScript/Type"
import { useState, useRef, useEffect } from "react"
import { Ellipsis, Eraser, PlusIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function KanbanList({ title }: KanbanListProps) {
    /**
     * ! STATE (état, données) de l'application
     */
    const [CardName, setCardName] = useState("")
    const addCardRef = useRef<HTMLDivElement>(null)
    const [isAdding, setIsAdding] = useState(false)
    const [cards, setCards] = useState<string[]>([])


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {
        // Écouter les clics de l'utilisateur
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            // Arrêter d'écouter les clics de l'utilisateur
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Ajouter une carte à la liste
    const addCard = () => {

        if (CardName.trim() !== "") {
            setCards([...cards, CardName]) // Ajouter la carte à la liste
            setCardName("") // Réinitialiser le champ de saisie
        }
        // Fermer le formulaire d'ajout
        setIsAdding(false)
    }

    // Fermer le formulaire d'ajout de carte
    const handleCancel = () => {
        setIsAdding(false) // Fermer le formulaire
        setCardName('') // Réinitialiser le champ de saisie
    }

    // Fermer le formulaire d'ajout de carte
    const handleClickOutside = (event: MouseEvent) => {

        // Si l'utilisateur clique en dehors du formulaire
        if (addCardRef.current && !addCardRef.current.contains(event.target as Node)) {
            setIsAdding(false) // Fermer le formulaire
        }
    }


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Card className="flex flex-col w-full max-w-72 shadow-sm" ref={addCardRef}>
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
                    <div className="flex flex-col justify-between h-full">
                        <Input
                            type="text"
                            placeholder="Nom de la carte"
                            value={CardName}
                            onChange={(e) => setCardName(e.target.value)}
                            autoFocus
                            className="w-full h-14 shadow-sm"
                        />
                        <div className="grid grid-cols-6 gap-2 mt-3">
                            <Button size={"sm"} onClick={addCard} className="col-span-5 w-full rounded-sm">
                                Ajouter
                            </Button>

                            <Button variant="outline" size={"sm"} onClick={handleCancel} className="w-full p-2 rounded-sm">
                                <Eraser className="h-4 w-4" />
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
                        className="w-full justify-start items-center font-medium"
                        onClick={() => setIsAdding(true)}
                    >
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Ajouter une carte
                    </Button>
                )}

            </CardFooter>
        </Card>
    );
}
