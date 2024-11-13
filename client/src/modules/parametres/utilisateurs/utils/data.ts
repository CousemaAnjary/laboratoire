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

// Spécifiez les clés que vous souhaitez rendre filtrables
const filterableKeys: Array<keyof Utilisateur> = ["statut"]; // Ajoutez ici les clés que vous voulez

// Fonction pour générer des options uniques pour chaque clé
function generateFilterableColumns() {
    return filterableKeys.map((key) => {
        const uniqueValues = Array.from(
            new Set(utilisateurData.map((item) => item[key]))
        );
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

// Générer `filterableColumns` en utilisant uniquement les clés spécifiées
export const filterableColumns = generateFilterableColumns();
