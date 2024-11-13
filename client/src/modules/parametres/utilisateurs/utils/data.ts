// data.ts

// Exemple de données
export type Utilisateur = {
    nom: string;
    prénom: string;
    email: string;
    statut: string;
    rôle: string;
    dateInscription: string;
};

export const utilisateurData: Utilisateur[] = [

    {
        nom: "Sophie",
        prénom: "Durand",
        email: "sophie.durand@example.com",
        statut: "Actif",
       
        rôle: "Utilisateur",
        dateInscription: "2022-04-15",
    },
    {
        nom: "Lucas",
        prénom: "Martinez",
        email: "lucas.martinez@example.com",
        statut: "Inactif",
      
        rôle: "Utilisateur",
        dateInscription: "2018-06-11",
    },
    {
        nom: "Emma",
        prénom: "Lefebvre",
        email: "emma.lefebvre@example.com",
        statut: "Actif",
       
        rôle: "Modérateur",
        dateInscription: "2021-11-03",
    },
    {
        nom: "Hugo",
        prénom: "Bernard",
        email: "hugo.bernard@example.com",
        statut: "Actif",
       
        rôle: "Administrateur",
        dateInscription: "2017-03-28",
    },
    {
        nom: "Chloé",
        prénom: "Moreau",
        email: "chloe.moreau@example.com",
        statut: "Inactif",
      
        rôle: "Utilisateur",
        dateInscription: "2020-02-21",
    },
    {
        nom: "Léo",
        prénom: "Dubois",
        email: "leo.dubois@example.com",
        statut: "Actif",
        
        rôle: "Utilisateur",
        dateInscription: "2022-08-10",
    },
    {
        nom: "Julie",
        prénom: "Simon",
        email: "julie.simon@example.com",
        statut: "Actif",
        
        rôle: "Modérateur",
        dateInscription: "2019-05-19",
    },
];


// Récupérer les clés des propriétés dynamiquement
export const utilisateurKeys = Object.keys(utilisateurData[0]) as Array<keyof Utilisateur>;

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
