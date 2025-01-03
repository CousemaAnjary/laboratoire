import { Button } from "@/components/ui/button"
import { FaEdit, FaUsers } from "react-icons/fa"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { RolesPermissionsProps } from "../typeScript/rolesPermissionsType"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom"



export function RolesPermissionsActions<TData extends { id: number }>({ row }: RolesPermissionsProps<TData>) {
    /**
     * ! STATE (état, données) de l'application
     */
    // Vous pouvez accéder aux données de la ligne comme ceci :
    const rowData = row.original
    const navigate = useNavigate();

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleViewUsers = () => {
        // Naviguer vers la page des utilisateurs associés à ce rôle
        navigate(`/roles-permissions/${rowData.id}/users`);
        console.log("Row Data:", rowData);

    }
    /**
     * ! AFFICHAGE (render) de l'application
     */
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
                <DropdownMenuItem className="font-inter text-xs">
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
