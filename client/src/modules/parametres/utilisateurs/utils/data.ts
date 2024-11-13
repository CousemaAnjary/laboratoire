// data.ts
export type Utilisateur = {  
    nom: string;
    prénom: string;
    email: string;
    statut: string;
};

// Exemple de données
export const utilisateurData: Utilisateur[] = [
    {   
        nom: "John",
        prénom: "Doe",
        email: "john.doe@example.com",
        statut: "Actif",  
    },
    {
        nom: "ABDILLAH",
        prénom: "Cousema",
        email: "cousema@example.com",
        statut: "Inactif",
    },
];

// Récupérer les clés des propriétés dynamiquement
export const utilisateurKeys = Object.keys(utilisateurData[0]) as Array<keyof Utilisateur>;

