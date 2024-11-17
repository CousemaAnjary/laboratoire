import { Row } from "@tanstack/react-table"

export interface UtilisateurRowActionsProps<TData> {
    row: Row<TData>
}

export type Utilisateur = {
    nom: string;
    prénom: string;
    email: string;
    statut: string;
    date_Naissance: string;
    rôle: string;
    
};