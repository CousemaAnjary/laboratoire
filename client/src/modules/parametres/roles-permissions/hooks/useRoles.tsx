import { useEffect, useState } from "react";
import { getRoles } from "../rolesPermissionsService";
import { Roles } from "../typeScript/rolesPermissionsType";

export function useRoles() {
    const [roles, setRoles] = useState<Roles[]>([])

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const data = await getRoles()
                console.log("Données des rôles récupérées :", data); // Vérifiez la clé users_count
                setRoles(data)
            } catch (error) {
                console.error("Erreur lors de la récupération des rôles:", error)
            }
        };

        fetchRoles()
    }, [])

    return roles
}
