import { ColumnDef } from "@tanstack/react-table";

// Fonction générique pour générer automatiquement les colonnes avec des en-têtes en majuscules
export function GenerateColumns<T>(keys: Array<keyof T>): ColumnDef<T>[] {
    return keys.map((key) => ({
        accessorKey: key as string,
        header: String(key).toUpperCase(),
    })) as ColumnDef<T>[];
}
