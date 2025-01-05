import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { FaUserAltSlash } from "react-icons/fa"
import { PiUserSwitchDuotone } from "react-icons/pi";
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { RolesUsersProps } from "../typeScript/rolesPermissionsType"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"





export default function RolesUsersActions<TData>({ row }: RolesUsersProps<TData>) {
    /**
     * ! STATE (état, données) de l'application
     */
    const rowData = row.original;

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleChangeRole = () => {
        console.log("Changer le rôle pour :", rowData);
    };

    const handleDisableUser = () => {
        console.log("Désactiver l'utilisateur :", rowData);
    };

    const handleDeleteUser = () => {
        console.log("Supprimer l'utilisateur :", rowData);
    };

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
                <DropdownMenuItem
                    className="font-inter text-xs"
                    onClick={handleChangeRole}
                >
                    <PiUserSwitchDuotone className="h-4 w-4 mr-2" />
                    Changer le rôle
                </DropdownMenuItem>
                {/* Option pour désactiver l'utilisateur */}
                <DropdownMenuItem
                    className="font-inter text-xs"
                    onClick={handleDisableUser}
                >
                    <FaUserAltSlash className="h-4 w-4 mr-2" />
                    Désactiver
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Option pour supprimer */}
                <DropdownMenuItem
                    className="font-inter text-xs"
                    onClick={handleDeleteUser}
                >
                    <TrashIcon className="h-4 w-4 mr-2 text-red-600" />
                    Supprimer
                    <span className="ml-auto text-xs text-muted-foreground">⌘⌫</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
