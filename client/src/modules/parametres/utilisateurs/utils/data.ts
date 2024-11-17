import { generateFilterableColumns } from "@/utils/generateFilterableColumns";
import { Profil } from "../typeScript/utilisateurType";

// Exemple de données mises à jour
export const profilData: Profil[] = [
    {
        nomProfil: "Administration",
        description: "Accès aux fonctionnalités d'administration générale.",
        permissions: ["Lire", "Écrire", "Modifier"],     
        statut: "actif",
        derniereMiseAJour: "20 novembre 2024",
        utilisateursAssignes: 5,
    },
    {
        nomProfil: "Utilisateur Standard",
        description: "Accès aux fonctionnalités de base.",
        permissions: ["Lire"], 
        statut: "actif",
        derniereMiseAJour: "10 novembre 2024",
        utilisateursAssignes: 12,
    },
    {
        nomProfil: "Support Technique",
        description: "Support technique et assistance.",
        permissions: ["Lire", "Modifier"],
        statut: "inactif",
        derniereMiseAJour: "15 septembre 2024",
        utilisateursAssignes: 3,
    },
];

// Définir les clés que vous souhaitez rendre filtrables
const filterableKeys: Array<keyof Profil> = ["statut"];

// Utiliser la fonction pour générer `filterableColumns`
export const filterableColumns = generateFilterableColumns(profilData, filterableKeys);
