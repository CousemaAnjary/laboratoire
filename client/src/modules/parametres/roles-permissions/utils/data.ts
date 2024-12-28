import { Roles } from "../typeScript/utilisateurType";

export function transformRoles(roles: Roles[]): Roles[] {
    return roles.map((role) => ({
        name: role.name || "Non spécifié",
        description: role.description || "Pas de description",
        permissions: role.permissions || ["lire", "écrire", "modifier"],
        statut: role.statut || "inconnu",
        derniereMiseAJour: role.derniereMiseAJour || "Non spécifié",
        utilisateursAssignes: role.utilisateursAssignes || 0,
    }));
}
