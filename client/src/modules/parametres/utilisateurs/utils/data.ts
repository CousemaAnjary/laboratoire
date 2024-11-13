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

    {
        nom: "BEN MOHAMED",
        prénom: "Nour",
        email: "nour@gmail.com",
        statut: "Actif",
    },
];

// Récupérer les clés des propriétés dynamiquement
export const utilisateurKeys = Object.keys(utilisateurData[0]) as Array<keyof Utilisateur>;

