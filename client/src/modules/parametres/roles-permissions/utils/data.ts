import { Roles } from "../typeScript/rolesPermissionsType";

export function dataRole(roles: Roles[]): Roles[] {
    return roles.map((role) => ({
        id: role.id ,
        name: role.name || "Non spécifié",
        description: role.description || "Pas de description",
        permissions: role.permissions.map((perm) => ({ id: perm.id, name: perm.name })),
        statut: role.statut || "inconnu",
        derniereMiseAJour: role.derniereMiseAJour || "Non spécifié",
        user_count: role.user_count || 0, // Utiliser users_count correctement
    }))
}
