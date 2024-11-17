import { Utilisateur } from "../typeScript/utilisateurType"
import { generateFilterableColumns } from "@/utils/generateFilterableColumns"


// Exemple de données
export const utilisateurData: Utilisateur[] = [
    {
        nom: "Sophie",
        prénom: "Durand",
        email: "sophie.durand@example.com",
        statut: "Actif",
        date_Naissance: "1993-11-20",
        rôle: "Utilisateur",
    },
    {
        nom: "Lucas",
        prénom: "Martinez",
        email: "lucas.martinez@example.com",
        statut: "Inactif",
        date_Naissance: "1988-01-30",
        rôle: "Utilisateur",
    },
    {
        nom: "Emma",
        prénom: "Lefebvre",
        email: "emma.lefebvre@example.com",
        statut: "Actif",
        date_Naissance: "1995-07-05",
        rôle: "Modérateur",
    },
]

// Définir les clés que vous souhaitez rendre filtrables
const filterableKeys: Array<keyof Utilisateur> = ["statut", "rôle"]

// Utiliser la fonction pour générer `filterableColumns`
export const filterableColumns = generateFilterableColumns(utilisateurData, filterableKeys)
