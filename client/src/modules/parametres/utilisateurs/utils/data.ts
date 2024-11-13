// data.ts
export type Utilisateur = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    statut: string;
};

// Exemple de données
export const utilisateurData: Utilisateur[] = [
    {
        id: 1,
        nom: "John",
        prenom: "Doe",
        email: "john.doe@example.com",
        statut: "Actif",  
    },
    {
        id: 2,
        nom: "ABDILLAH",
        prenom: "Cousema",
        email: "cousema@example.com",
        statut: "Inactif",
    },
];

// Récupérer les clés des propriétés dynamiquement
export const utilisateurKeys = Object.keys(utilisateurData[0]) as Array<keyof Utilisateur>;

