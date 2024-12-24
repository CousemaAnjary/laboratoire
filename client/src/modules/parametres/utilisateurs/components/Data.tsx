/* eslint-disable react-refresh/only-export-components */
// import { useEffect, useState } from "react"
import { Roles } from "../typeScript/utilisateurType"
// import { getRoles } from "../rolesPermissionsService"
import { generateFilterableColumns } from "@/utils/generateFilterableColumns"


export default function Data(): Roles[] {
    /**
     * ! STATE (état, données) de l'application
     */
    // const [roles, setRoles] = useState<Roles[]>([]);


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    // useEffect(() => {
    //     const fetchRoles = async () => {
    //         try {
    //             // Appel à l'API pour récupérer les rôles
    //             const data = await getRoles()
    //             setRoles(data);
    //         } catch (error) {
    //             console.error("Erreur lors de la récupération des rôles:", error);
    //         }
    //     };
    //     fetchRoles();
    // }, []);


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return [
        {
            name: "Administrateur",
            description: "Rôle d'administrateur",
            permissions: ["lire", "écrire", "modifier"],
            statut: "Actif",
            derniereMiseAJour: "20 novembre 2024",
            utilisateursAssignes: 10,
        },
        {
            name: "Utilisateur",
            description: "Rôle d'utilisateur",
            permissions: ["lire"],
            statut: "Inactif",
            derniereMiseAJour: "10 novembre 2024",
            utilisateursAssignes: 20,
        },
        {
            name: "support Technique",
            description: "support technique et assistance.",
            permissions: ["lire", "modifier"],
            statut: "inactif",
            derniereMiseAJour: "15 septembre 2024",
            utilisateursAssignes: 3,
        },
    ]
}
// Définir les clés que vous souhaitez rendre filtrables
const filterableKeys: Array<keyof Roles> = ["statut"];

// Utiliser la fonction pour générer `filterableColumns`
export const filterableColumns = generateFilterableColumns(Data(), filterableKeys);


