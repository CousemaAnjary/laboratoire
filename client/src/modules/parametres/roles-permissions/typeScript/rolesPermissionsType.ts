import { Row } from "@tanstack/react-table"

export interface RolesPermissionsProps<TData> {
    row: Row<TData>
}

export interface Roles {
    id: string
    name: string; // Nom du Profil
    description: string; // Description du profil
    permissions: string[]; // Liste des permissions (Lire, Écrire, Modifier, etc.)
    statut: string; // Statut (actif ou inactif)
    derniereMiseAJour: string; // Dernière Mise à Jour
    user_count: number; // Nombre d'utilisateurs assignés
}