import { Button } from "@/components/ui/button"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { UtilisateurRowActionsProps } from "../typeScript/utilisateurType"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pencil, TrashIcon } from "lucide-react"



export function UtilisateurRowActions<TData>({ row }: UtilisateurRowActionsProps<TData>) {
    // Vous pouvez accéder aux données de la ligne comme ceci :
    const rowData = row.original

    // Fonctions d'exemple utilisant les données de la ligne
    const handleEdit = () => {
        console.log("Éditer la ligne :", rowData)
    }

    const handleDelete = () => {
        console.log("Supprimer la ligne :", rowData)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Ouvrir le menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem onClick={handleEdit}><Pencil className="h-4 w-4 mr-2" />Éditer</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleDelete}>
                    <TrashIcon className="h-4 w-4 mr-2" />
                    Supprimer
                    <span className="ml-auto text-xs text-muted-foreground">⌘⌫</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}