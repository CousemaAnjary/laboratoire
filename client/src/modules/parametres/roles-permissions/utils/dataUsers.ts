import { Users } from "../typeScript/rolesPermissionsType";


export function dataUsers(users: Users[]): Users[] {
    return users.map((users) => ({
        id: users.id,
        last_name: users.last_name || "Non spécifié",
        first_name: users.first_name || "Non spécifié",
        email: users.email || "Pas de description",
    }))
}
