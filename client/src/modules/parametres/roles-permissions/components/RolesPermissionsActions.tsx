import { Button } from "@/components/ui/button"
import { FaEdit, FaUsers } from "react-icons/fa"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { RolesPermissionsProps } from "../typeScript/rolesPermissionsType"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



export function RolesPermissionsActions<TData>({ row }: RolesPermissionsProps<TData>) {
    // Vous pouvez accéder aux données de la ligne comme ceci :
    const rowData = row.original

    // Fonctions d'exemple utilisant les données de la ligne
    const handleEdit = () => {
        console.log("Éditer la ligne :", rowData)
    }

    // const handleDelete = () => {
    //     console.log("Supprimer la ligne :", rowData)
    // }

    const handleViewUsers = () => {
        console.log("Voir les utilisateurs de la ligne :", rowData)
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
                <DropdownMenuItem className="font-inter text-xs" onClick={handleEdit}>
                    <FaEdit className="h-4 w-4 mr-2" />
                    Éditer config
                </DropdownMenuItem>
                {/* Option pour voir les détails */}
                <DropdownMenuItem className="font-inter text-xs" onClick={handleViewUsers} >
                    <FaUsers className="h-4 w-4 mr-2" />
                    Voir utilisateurs
                </DropdownMenuItem>
                {/* <DropdownMenuSeparator />
                <DropdownMenuItem className="font-inter text-xs" onClick={handleDelete}>
                    <TrashIcon className="h-4 w-4 mr-2 text-red-600" />
                    Supprimer
                    <span className="ml-auto text-xs text-muted-foreground">⌘⌫</span>
                </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
