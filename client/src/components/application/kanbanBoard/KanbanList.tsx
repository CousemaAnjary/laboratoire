import { z } from "zod"
import KanbanCard from "./KanbanCard"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Droppable } from "react-beautiful-dnd"
import { useState, useRef, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CirclePlus, Ellipsis, Eraser } from "lucide-react"
import { kanbanCardType, KanbanListProps } from "@/typeScript/Kanban"
import { addKanbanCard, kanbanCards } from "@/services/kanbanService"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


// Définir le schéma de validation avec Zod
const formSchema = z.object({
    name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
})


export default function KanbanList({ list }: KanbanListProps) {
    /**
     * ! STATE (état, données) de l'application
     */

    const addCardRef = useRef<HTMLDivElement>(null)
    const [isAdding, setIsAdding] = useState(false)
    const [cards, setCards] = useState<kanbanCardType[]>([])

    const form = useForm<kanbanCardType>({
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
    const handleSubmit = async (data: kanbanCardType): Promise<void> => {


        try {
            // Appeler la fonction pour ajouter une carte
            const response = await addKanbanCard(data)
            // Mettre à jour l'état avec les données de la réponse
            setCards([...cards, response.kanbanCard])
            form.reset({ name: '' }) // Réinitialiser le formulaire
            setIsAdding(false) // Fermer le formulaire


        } catch (error) {
            console.error('Erreur lors de l\'ajout de la carte:', error)
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
                                className="flex-1 space-y-2 px-4 py-1 overflow-auto"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >

                                {cards.map((card, index) => (
                                    <KanbanCard key={index} card={card} index={index} />
                                ))}


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
    );
}
