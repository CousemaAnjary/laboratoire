import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * Props pour le composant ChangeRoleDialog
 */
interface ChangeRoleDialogProps {
    isOpen: boolean;
    onClose: () => void;
    roles: { id: number; name: string }[];
    currentRoleId?: number; // Rôle actuel de l'utilisateur (facultatif)
    onApply: (roleId: number) => void; // Callback pour appliquer le changement de rôle
}

export default function ChangeRoleDialog({
    isOpen,
    onClose,
    roles,
    currentRoleId,
    onApply,
}: ChangeRoleDialogProps) {
    /**
     * ! STATE (état, données) de l'application
     */
    const [selectedRole, setSelectedRole] = useState<number | null>(currentRoleId || null);

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleRoleSelect = (roleId: number) => {
        setSelectedRole(roleId);
    };

    const handleApply = () => {
        if (selectedRole) {
            onApply(selectedRole); // Appeler le callback avec l'ID du rôle sélectionné
            onClose(); // Fermer le dialog
        }
    };

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
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
                        onClick={handleApply}
                        disabled={!selectedRole || selectedRole === currentRoleId}
                    >
                        Appliquer
                    </Button>
                    <Button
                        variant="outline"
                        onClick={onClose}
                    >
                        Annuler
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
