// data.ts
export type Payment = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    statut: string;
    rôle: string;
    dernièreConnexion: string;
};

// Exemple de données
export const data: Payment[] = [
    {
        id: 1,
        nom: "John",
        prenom: "Doe",
        email: "john.doe@example.com",
        statut: "Actif",
        rôle: "Admin",
        dernièreConnexion: "2024-11-09",
    },
    {
        id: 2,
        nom: "Jane",
        prenom: "Smith",
        email: "jane.smith@example.com",
        statut: "Inactif",
        rôle: "Utilisateur",
        dernièreConnexion: "2024-10-30",
    },
    // Ajoutez plus de données si nécessaire
];
