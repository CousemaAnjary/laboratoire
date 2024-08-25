import { z } from 'zod'
import KanbanList from './KanbanList'
import { CirclePlus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState, useRef, useEffect } from 'react'
import { kanbanListType } from '@/typeScript/Kanban'
import { zodResolver } from '@hookform/resolvers/zod'
import { DragDropContext } from 'react-beautiful-dnd'
import { useForm, UseFormReturn } from "react-hook-form"
import { Card, CardContent } from '@/components/ui/card'
import { addKanbanList, kanbanLists } from '@/services/kanbanService'
import { Form, FormControl, FormField, FormItem, } from '@/components/ui/form'


// Définir le schéma de validation avec Zod
const formSchema = z.object({
    name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
})


export default function Kanban() {
    /**
     * ! STATE (état, données) de l'application
     */
    const [isAdding, setIsAdding] = useState(false)
    const addListRef = useRef<HTMLDivElement>(null)
    const [lists, setLists] = useState<string[]>([])

    const form: UseFormReturn<kanbanListType> = useForm<kanbanListType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    // Récupérer les listes Kanban
    useEffect(() => {
        const fetchKanbanLists = async () => {
            try {
                // Appeler la fonction pour récupérer les listes
                const dataLists = await kanbanLists()
                // Mettre à jour l'état avec les listes récupérées
                setLists(dataLists)

            } catch (error) {
                console.error('Erreur lors de la récupération des listes:', error);
            }
        };
        // Appeler la fonction pour récupérer les listes
        fetchKanbanLists()
    }, [])

    // Écouter les clics de l'utilisateur
    useEffect(() => {
        // Écouter les clics de l'utilisateur
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            // Arrêter d'écouter les clics de l'utilisateur
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Fermer le formulaire d'ajout de liste
    const handleCancel = () => {
        setIsAdding(false) // Fermer le formulaire
        form.reset({ name: '' }) // Réinitialiser le champ de saisie
    }

    // Fermer le formulaire d'ajout de liste
    const handleClickOutside = (event: MouseEvent) => {
        // Si l'utilisateur clique en dehors du formulaire
        if (addListRef.current && !addListRef.current.contains(event.target as Node)) {
            setIsAdding(false) // Fermer le formulaire
        }
    }

    // Enregistrer une nouvelle liste
    const handleSubmit = async (data: kanbanListType): Promise<void> => {

        // Données à envoyer au serveur (API)
        const kanbanListData = {
            name: data.name,
            position: lists.length
        }

        try {
            const response = await addKanbanList(kanbanListData)
            // Mettre à jour l'état avec la nouvelle liste
            setLists([...lists, response.kanbanList])
            setIsAdding(false);
            form.reset({ name: '' });

        } catch (error) {
            // Afficher l'erreur dans la console
            console.error(error)
        }

    }

    const onDragEnd = () => {
        console.log('drag end')
    }

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex space-x-4 p-4 overflow-x-auto items-start">
                {/* Listes Kanban */}
                {lists.map((list, index) => (
                    <KanbanList key={index} list={list} />
                ))}

                {/* Formulaire d'ajout de liste */}
                {isAdding ? (
                    <Card className="w-72 shrink-0" ref={addListRef}>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)}>
                                <CardContent className="p-4">
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
                                                        className="mb-4"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="grid grid-cols-3 gap-2 mt-3 mb-3">
                                        <Button type='submit' size={"sm"} className="col-span-2 w-full rounded-sm">
                                            Ajouter
                                        </Button>

                                        <Button type='button' variant="outline" size={"sm"} onClick={handleCancel} className="w-full p-2 rounded-sm">
                                            Annuler
                                        </Button>
                                    </div>
                                </CardContent>
                            </form>
                        </Form>


                    </Card>
                ) : (
                    <Button
                        variant="ghost"
                        className="w-72 justify-start items-center border-dashed border"
                        onClick={() => setIsAdding(true)}
                    >
                        <CirclePlus className="mr-2 h-4 w-4" />
                        Ajouter une autre liste
                    </Button>
                )}
            </div>
        </DragDropContext>


    )
}