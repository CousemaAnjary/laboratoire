import { useEffect, useState } from "react";
import { Users } from "../typeScript/rolesPermissionsType";
import { getRolesUsers } from "../rolesPermissionsService";
import { useParams } from "react-router-dom";

export function useRoleUsers() {
    /**
     * ! STATE (état, données) de l'application
     */
    const [roleUsers, setRoleUsers] = useState<Users[]>([]) // Déclaration du state roleUsers

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const { id } = useParams()

    useEffect(() => {
        // Récupération des utilisateurs associés au rôle
        const fetchRoleUsers = async () => {
            try {
                const data = await getRolesUsers(Number(id))
                setRoleUsers(data)
            } catch (error) {
                console.error("Erreur lors de la récupération des utilisateurs associés au rôle:", error)
            }
        };

        fetchRoleUsers()
    }, [id])

    return roleUsers
}