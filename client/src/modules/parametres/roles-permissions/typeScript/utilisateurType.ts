import { Row } from "@tanstack/react-table"

export interface UtilisateurRowActionsProps<TData> {
    row: Row<TData>
}



export interface Roles {
    name: string; // Nom du Profil
    description: string; // Description du profil
    permissions: string[]; // Liste des permissions (Lire, Écrire, Modifier, etc.)
    statut: string; // Statut (actif ou inactif)
    derniereMiseAJour: string; // Dernière Mise à Jour
    utilisateursAssignes: number; // Nombre d'utilisateurs assignés
}

