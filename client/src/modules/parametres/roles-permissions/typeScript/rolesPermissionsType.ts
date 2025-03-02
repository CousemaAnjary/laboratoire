import { Row } from "@tanstack/react-table"

export interface RolesPermissionsProps<TData> {
    row: Row<TData>
}

export interface RolesUsersProps<TData> {
    row: Row<TData>
}

export interface Roles {
    id: number; // Identifiant unique
    name: string; // Nom du Profil
    description: string; // Description du profil
    permissions: { id: number; name: string }[]; // Liste des permissions
    statut: string; // Statut (actif ou inactif)
    derniereMiseAJour: string; // Dernière Mise à Jour
    users_count: number; // Nombre d'utilisateurs assignés
}

export interface Users {
    id: number; // Identifiant unique
    last_name: string; // Nom de famille de l'utilisateur
    first_name: string; // Prénom de
    email: string; // Adresse email de l'utilisateur
}