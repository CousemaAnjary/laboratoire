import { Button } from "@/components/ui/button"
import {  FaUserAltSlash } from "react-icons/fa"
import { PiUserSwitchDuotone } from "react-icons/pi";
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


export default function RolesUsersActions() {
    /**
     * ! STATE (état, données) de l'application
     */
    

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleChangeRole = () => {
        console.log("Changer le rôle")
    }


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
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
                        <PiUserSwitchDuotone className="h-4 w-4 mr-2" onClick={handleChangeRole} />
                        Changer le rôle
                    </DropdownMenuItem>
                    {/* Option pour voir les détails */}
                    <DropdownMenuItem className="font-inter text-xs" >
                        <FaUserAltSlash className="h-4 w-4 mr-2" />
                        Désactiver l'utilisateur
                    </DropdownMenuItem>
                    {/* <DropdownMenuSeparator />
                <DropdownMenuItem className="font-inter text-xs" onClick={handleDelete}>
                    <TrashIcon className="h-4 w-4 mr-2 text-red-600" />
                    Supprimer
                    <span className="ml-auto text-xs text-muted-foreground">⌘⌫</span>
                </DropdownMenuItem> */}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}