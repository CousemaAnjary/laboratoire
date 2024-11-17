import { Utilisateur } from "../typeScript/utilisateurType"
import { generateFilterableColumns } from "@/utils/generateFilterableColumns"


// Exemple de données
export const utilisateurData: Utilisateur[] = [
    {
        nom: "sophie",
        prénom: "durand",
        email: "sophie.durand@example.com",
        statut: "actif",
        date_Naissance: "1993-11-20",
        rôle: "utilisateur",
    },
    {
        nom: "lucas",
        prénom: "martinez",
        email: "lucas.martinez@example.com",
        statut: "inactif",
        date_Naissance: "1988-01-30",
        rôle: "utilisateur",
    },
    {
        nom: "emma",
        prénom: "lefebvre",
        email: "emma.lefebvre@example.com",
        statut: "actif",
        date_Naissance: "1995-07-05",
        rôle: "modérateur",
    },
]

// Définir les clés que vous souhaitez rendre filtrables
const filterableKeys: Array<keyof Utilisateur> = ["statut", "rôle"]

// Utiliser la fonction pour générer `filterableColumns`
export const filterableColumns = generateFilterableColumns(utilisateurData, filterableKeys)
