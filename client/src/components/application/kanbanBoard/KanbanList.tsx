import { z } from "zod"
import KanbanCard from "./KanbanCard"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Droppable } from "react-beautiful-dnd"
import { useState, useRef, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CirclePlus, Ellipsis, Eraser } from "lucide-react"
import { addKanbanCard, kanbanCards } from "@/services/kanbanService"
import { KanbanCardType, KanbanListProps } from "@/typeScript/Kanban"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SkeletonCard from "@/components/loading/SkeletonCard"
// import { v4 as uuidv4 } from 'uuid'; // Importer un générateur d'UUID


// Définir le schéma de validation avec Zod
const formSchema = z.object({
    name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
})


export default function KanbanList({ list }: KanbanListProps) {
    /**
     * ! STATE (état, données) de l'application
     */
    const [loading, setLoading] = useState(true)
    const addCardRef = useRef<HTMLDivElement>(null)
    const [isAdding, setIsAdding] = useState(false)
    const [cards, setCards] = useState<KanbanCardType[]>([])

    const form = useForm<KanbanCardType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    // Récupérer les cartes de la colonne
    useEffect(() => {
        const fetchKanbanCards = async () => {

            try {
                // Appeler la fonction pour récupérer les cartes
                const dataCards = await kanbanCards(list.id)
                // Mettre à jour l'état avec les cartes récupérées
                setCards(dataCards)

            } catch (error) {
                console.error('Erreur lors de la récupération des cartes:', error)

            } finally {
                setLoading(false)
            }
        }
        // Appeler la fonction pour récupérer les cartes
        fetchKanbanCards()
    }, [list.id])

    // Écouter les clics de l'utilisateur
    useEffect(() => {
        // Écouter les clics de l'utilisateur
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            // Arrêter d'écouter les clics de l'utilisateur
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Fermer le formulaire d'ajout de carte
    const handleCancel = () => {
        setIsAdding(false) // Fermer le formulaire
        form.reset({ name: '' }) // Réinitialiser le champ de saisie    
    }

    // Fermer le formulaire d'ajout de carte
    const handleClickOutside = (event: MouseEvent) => {

        // Si l'utilisateur clique en dehors du formulaire
        if (addCardRef.current && !addCardRef.current.contains(event.target as Node)) {
            setIsAdding(false) // Fermer le formulaire
        }
    }

    // Soumettre le formulaire d'ajout de carte
    const handleSubmit = async (data: KanbanCardType): Promise<void> => {

        // ID temporaire pour la carte
        const tempId = `temp-${Date.now()}`

        // Données à envoyer au serveur (API)
        const kanbanCardData = {
            id: tempId,
            name: data.name,
            position: cards.length,
            list_id: list.id
        }

        // Mettre à jour l'état immédiatement avec la nouvelle carte
        setCards((prevCards) => [...prevCards, kanbanCardData])
        form.reset({ name: '' })
        setIsAdding(false)

        try {
            // Appeler la fonction pour ajouter une carte
            await addKanbanCard(kanbanCardData)
            setCards(await kanbanCards(list.id)) // Recharger les cartes depuis le serveur pour obtenir des IDs stables

        } catch (error) {
            console.error('Erreur lors de l\'ajout de la carte:', error)

            // En cas d'erreur, retirer la carte ajoutée localement
            setCards((prevCards) => prevCards.filter((card) => card.id !== tempId))
        }

    }

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Card className="flex flex-col w-full max-w-72 shadow-sm" ref={addCardRef}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">{list.name}</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Ellipsis className="h-4 w-4" />
                </Button>
            </CardHeader>

            <Droppable droppableId={String(list.id)}>
                {(provided) => (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                            <CardContent
                                className="flex-1 space-y-2 px-4 py-1 overflow-visible transition-all duration-200 ease-in-out"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {loading ? (
                                    Array(cards.length || 1).fill(null).map((_, index) => (
                                        <SkeletonCard key={index} />
                                    ))
                                ) : (
                                    cards.map((card, index) => (
                                        <KanbanCard key={card.id} card={card} index={index} />
                                    ))
                                )}

                                {isAdding && (
                                    <div className="flex flex-col justify-between h-full">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input {...field}
                                                            type="text"
                                                            placeholder="Entrez un titre pour cette liste"
                                                            autoFocus
                                                            className="w-full h-12 shadow-sm"
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <div className="grid grid-cols-6 gap-2 mt-3">
                                            <Button type="submit" size={"sm"} className="col-span-5 w-full rounded-sm">
                                                Ajouter
                                            </Button>

                                            <Button type="button" variant="outline" size={"sm"} onClick={handleCancel} className="w-full p-2 rounded-sm">
                                                <Eraser className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {provided.placeholder}
                            </CardContent>
                        </form>
                    </Form>
                )}
            </Droppable>

            <CardFooter className="px-4 mt-2">
                {!isAdding && (
                    <Button
                        variant="outline"
                        size={"sm"}
                        className="w-full justify-start items-center font-medium"
                        onClick={() => setIsAdding(true)}
                    >
                        <CirclePlus className="mr-2 h-4 w-4" />
                        Ajouter une carte
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
