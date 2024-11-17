export function generateFilterableColumns<T>(
    data: T[], // Les données à partir desquelles générer les options
    filterableKeys: Array<keyof T> // Les clés que vous souhaitez rendre filtrables
) {
    return filterableKeys.map((key) => {
        // Récupérer des valeurs uniques pour chaque clé
        const uniqueValues = Array.from(new Set(data.map((item) => item[key])));

        // Log pour vérifier les valeurs uniques
        console.log(`Unique values for ${String(key)}:`, uniqueValues);

        // Vérifiez si la clé est de type chaîne avant d'utiliser `charAt` et `slice`
        const title = typeof key === "string"
            ? key.charAt(0).toUpperCase() + key.slice(1)
            : String(key);

        // Log pour vérifier les options de filtrage générées
        const options = uniqueValues.map((value) => ({
            label: String(value), // Convertir les valeurs en chaînes
            value: String(value),
        }));

        console.log(`Options for ${String(key)}:`, options);

        return {
            id: key,
            title, // Utiliser le titre après vérification du type
            options,
        };
    });
}
