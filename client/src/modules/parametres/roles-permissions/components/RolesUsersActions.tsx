import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaUserAltSlash } from "react-icons/fa";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { RolesUsersProps } from "../typeScript/rolesPermissionsType";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

export default function RolesUsersActions<TData>({ row }: RolesUsersProps<TData>) {
    /**
     * ! STATE (état, données) de l'application
     */
    const rowData = row.original;
    const [openDialog, setOpenDialog] = useState(false); // État pour gérer l'ouverture/fermeture du dialog
    const [selectedRole, setSelectedRole] = useState<number | null>(null); // Rôle sélectionné
    const [roles] = useState([
        { id: 1, name: "Super Administration" },
        { id: 2, name: "Administration" },
        { id: 3, name: "Utilisateur" },
    ]); // Liste des rôles disponibles

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleChangeRole = () => {
        setOpenDialog(true); // Ouvrir le dialog
    };

    const handleRoleSelect = (roleId: number) => {
        setSelectedRole(roleId); // Mettre à jour le rôle sélectionné
    };

    const handleApplyRoleChange = () => {
        console.log("Rôle appliqué :", selectedRole);
        // Logique pour appliquer le changement de rôle à l'utilisateur
        setOpenDialog(false);
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

            {/* Dialog pour changer le rôle */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Attribuer un nouveau rôle</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                        {roles.map((role) => (
                            <div key={role.id} className="flex items-center gap-2">
                                <Checkbox
                                    checked={selectedRole === role.id}
                                    onCheckedChange={() => handleRoleSelect(role.id)}
                                />
                                <span className="font-inter text-sm text-gray-800">
                                    {role.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <DialogFooter>
                        <Button
                            variant="default"
                            onClick={handleApplyRoleChange}
                            disabled={!selectedRole}
                        >
                            Appliquer
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setOpenDialog(false)}
                        >
                            Annuler
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
