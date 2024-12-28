import { Roles } from "../typeScript/utilisateurType";

export function dataRole(roles: Roles[]): Roles[] {
    return roles.map((role) => ({
        name: role.name || "Non spécifié",
        description: role.description || "Pas de description",
        permissions: role.permissions.map((permission) => permission.name) || [],
        statut: role.statut || "inconnu",
        derniereMiseAJour: role.derniereMiseAJour || "Non spécifié",
        utilisateursAssignes: role.utilisateursAssignes || 0,
    }));
}
