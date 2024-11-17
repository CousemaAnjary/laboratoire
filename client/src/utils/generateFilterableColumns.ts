// Fonction réutilisable pour générer des colonnes filtrables
export function generateFilterableColumns<T>(
    data: T[], // Les données à partir desquelles générer les options
    filterableKeys: Array<keyof T> // Les clés que vous souhaitez rendre filtrables
) {
    return filterableKeys.map((key) => {
        // Récupérer des valeurs uniques pour chaque clé
        const uniqueValues = Array.from(new Set(data.map((item) => item[key])));

        // Vérifiez si la clé est de type chaîne avant d'utiliser `charAt` et `slice`
        const title = typeof key === 'string' ? key.charAt(0).toUpperCase() + key.slice(1) : String(key);

        return {
            id: key,
            title, // Utiliser le titre après vérification du type
            options: uniqueValues.map((value) => ({
                label: String(value).charAt(0).toUpperCase() + String(value).slice(1),
                value: String(value),
            })),
        }
    })
}
