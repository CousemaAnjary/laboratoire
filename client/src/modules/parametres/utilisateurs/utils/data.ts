export type Payment = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    statut: string;
    rôle: string;
    dernièreConnexion: string;
};

export const data: Payment[] = [
    {
        id: 1,
        nom: "John Doe",
        prenom: "John",
        email: "john.doe@example.com",
        statut: "Actif",
        rôle: "Admin",
        dernièreConnexion: "2024-11-09",
    },
    {
        id: 2,
        nom: "Jane Smith",
        prenom: "Jane",
        email: "jane.smith@example.com",
        statut: "Inactif",
        rôle: "Utilisateur",
        dernièreConnexion: "2024-10-30",
    },
    // Ajoutez plus de données si nécessaire
];
