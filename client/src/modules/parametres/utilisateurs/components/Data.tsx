// /* eslint-disable react-refresh/only-export-components */
// // import { useEffect, useState } from "react"
// import { Roles } from "../typeScript/utilisateurType"
// // import { getRoles } from "../rolesPermissionsService"
// import { generateFilterableColumns } from "@/utils/generateFilterableColumns"


// export default function Data(): Roles[] {
//     /**
//      * ! STATE (état, données) de l'application
//      */
//     // const [roles, setRoles] = useState<Roles[]>([]);


//     /**
//      * ! COMPORTEMENT (méthodes, fonctions) de l'application
//      */
//     // useEffect(() => {
//     //     const fetchRoles = async () => {
//     //         try {
//     //             // Appel à l'API pour récupérer les rôles
//     //             const data = await getRoles()
//     //             setRoles(data);
//     //         } catch (error) {
//     //             console.error("Erreur lors de la récupération des rôles:", error);
//     //         }
//     //     };
//     //     fetchRoles();
//     // }, []);


//     /**
//      * ! AFFICHAGE (render) de l'application
//      */
//     return roles.map((role) => ({
//         name: role.name || "Non spécifié",
//         description: role.description || "Pas de description",
//         permissions: role.permissions || ["lire", "écrire", "modifier"],
//         statut: role.statut || "inconnu",
//         derniereMiseAJour: role.derniereMiseAJour || "Non spécifié",
//         utilisateursAssignes: role.utilisateursAssignes || 0,
//     }));
// }
// // Définir les clés que vous souhaitez rendre filtrables
// const filterableKeys: Array<keyof Roles> = ["statut"];

// // Utiliser la fonction pour générer `filterableColumns`
// export const filterableColumns = generateFilterableColumns(Data(), filterableKeys);


