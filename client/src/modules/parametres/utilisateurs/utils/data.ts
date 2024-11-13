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

// Mettre à jour utilisateurFields pour inclure des options de filtrage
export const utilisateurFields: {
    key: keyof Utilisateur;
    title: string;
    filterable?: boolean;
    filterOptions?: { label: string; value: string }[];
}[] = [
    { key: "nom", title: "Nom" },
    { key: "prenom", title: "Prénom" },
    { key: "email", title: "Email" },
    { 
        key: "statut", 
        title: "Statut", 
        filterable: true, 
        filterOptions: generateFilterOptions(utilisateurData, "statut")
    },
    
];

// Fonction pour générer des options de filtrage uniques
function generateFilterOptions<T, K extends keyof T>(data: T[], key: K): { label: string; value: string }[] {
    const uniqueValues = Array.from(new Set(data.map(item => item[key] as string)));
    return uniqueValues.map(value => ({ label: value, value }));
}
