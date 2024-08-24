import KanbanList from './KanbanList'
import { CirclePlus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState, useRef, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'


export default function Kanban() {
    /**
     * ! STATE (état, données) de l'application
     */
    const [isAdding, setIsAdding] = useState(false)
    const addListRef = useRef<HTMLDivElement>(null)
    const [newListTitle, setNewListTitle] = useState('')
    const [lists, setLists] = useState<string[]>(['À faire', 'En cours', 'Terminé'])


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

    // Ajouter une liste au tableau Kanban
    const addList = () => {

        if (newListTitle.trim() !== '') {
            setLists([...lists, newListTitle]) // Ajouter la liste au tableau
            setNewListTitle('') // Réinitialiser le champ de saisie
        }
        // Fermer le formulaire d'ajout
        setIsAdding(false)
    }

    // Fermer le formulaire d'ajout de liste
    const handleCancel = () => {
        setIsAdding(false) // Fermer le formulaire
        setNewListTitle('') // Réinitialiser le champ de saisie
    }

    // Fermer le formulaire d'ajout de liste
    const handleClickOutside = (event: MouseEvent) => {
        // Si l'utilisateur clique en dehors du formulaire
        if (addListRef.current && !addListRef.current.contains(event.target as Node)) {
            setIsAdding(false) // Fermer le formulaire
        }
    }
    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="flex space-x-4 p-4 overflow-x-auto items-start">
            {/* Listes Kanban */}
            {lists.map((title, index) => (
                <KanbanList key={index} title={title} />
            ))}

            {/* Formulaire d'ajout de liste */}
            {isAdding ? (
                <Card className="w-72 shrink-0" ref={addListRef}>
                    <CardContent className="p-4">
                        <Input
                            type="text"
                            placeholder="Entrez un titre pour cette liste"
                            value={newListTitle}
                            onChange={(e) => setNewListTitle(e.target.value)}
                            autoFocus
                            className="mb-4"
                        />
                        <div className="grid grid-cols-3 gap-2 mt-3 mb-3">
                            <Button size={"sm"} onClick={addList} className="col-span-2 w-full rounded-sm">
                                Ajouter
                            </Button>

                            <Button variant="outline" size={"sm"} onClick={handleCancel} className="w-full p-2 rounded-sm">
                                Annuler
                            </Button>
                        </div>
                    </CardContent>
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
    )
}