import { useEffect, useState } from "react";
import { Roles } from "../typeScript/utilisateurType";
import { getRoles } from "../rolesPermissionsService";

export function useRoles() {
    const [roles, setRoles] = useState<Roles[]>([])

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const data = await getRoles()
                setRoles(data)
            } catch (error) {
                console.error("Erreur lors de la récupération des rôles:", error)
            }
        };

        fetchRoles()
    }, [])

    return roles
}
