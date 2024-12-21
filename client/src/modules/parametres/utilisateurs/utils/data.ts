import { Profil } from "../typeScript/utilisateurType"
import { generateFilterableColumns } from "@/utils/generateFilterableColumns"


// Exemple de données mises à jour
export const profilData: Profil[] = [
    {
        nomProfil: "administration",
        description: "accès aux fonctionnalités d'administration générale.",
        permissions: ["lire", "écrire", "modifier"],     
        statut: "actif",
        derniereMiseAJour: "20 novembre 2024",
        utilisateursAssignes: 5,
    },
    {
        nomProfil: "utilisateur Standard",
        description: "accès aux fonctionnalités de base.",
        permissions: ["lire"], 
        statut: "actif",
        derniereMiseAJour: "10 novembre 2024",
        utilisateursAssignes: 12,
    },
    {
        nomProfil: "support Technique",
        description: "support technique et assistance.",
        permissions: ["lire", "modifier"],
        statut: "inactif",
        derniereMiseAJour: "15 septembre 2024",
        utilisateursAssignes: 3,
    },
]

// Définir les clés que vous souhaitez rendre filtrables
const filterableKeys: Array<keyof Profil> = ["statut"];

// Utiliser la fonction pour générer `filterableColumns`
export const filterableColumns = generateFilterableColumns(profilData, filterableKeys);
