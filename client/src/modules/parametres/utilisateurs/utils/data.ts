// data.ts
export type Utilisateur = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    statut: string;
};

export const utilisateurFields: { key: keyof Utilisateur; title: string }[] = [
    { key: "id", title: "ID" },
    { key: "nom", title: "Nom" },
    { key: "prenom", title: "Prénom" },
    { key: "email", title: "Email" },
    { key: "statut", title: "Statut" },
];

export const utilisateurData: Utilisateur[] = [
    {
        id: 1,
        nom: "John",
        prenom: "Doe",
        email: "john.doe@example.com",
        statut: "Actif",
    },
    // Ajoutez plus de données si nécessaire
];
