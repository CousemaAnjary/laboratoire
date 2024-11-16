// data.ts

// Exemple de données
export type Utilisateur = {
    nom: string;
    prénom: string;
    email: string;
    statut: string;
    date_Naissance: string;
    rôle: string;
    
};

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
  
    
];


// Récupérer les clés des propriétés dynamiquement
export const utilisateurKeys = Object.keys(utilisateurData[0]) as Array<keyof Utilisateur>

// Définir les clés que vous souhaitez rendre filtrables
const filterableKeys: Array<keyof Utilisateur> = ["statut", "rôle"];

// Fonction pour générer des options uniques pour chaque clé
function generateFilterableColumns() {
    return filterableKeys.map((key) => {
        const uniqueValues = Array.from(new Set(utilisateurData.map((item) => item[key])));
        return {
            id: key,
            title: key.charAt(0).toUpperCase() + key.slice(1),
            options: uniqueValues.map((value) => ({
                label: String(value),
                value: String(value),
            })),
        };
    });
}

// Générer `filterableColumns` automatiquement
export const filterableColumns = generateFilterableColumns();
