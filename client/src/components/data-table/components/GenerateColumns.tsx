import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";

// Fonction générique pour générer automatiquement les colonnes avec des en-têtes en majuscules
export function GenerateColumns<T>(keys: Array<keyof T>): ColumnDef<T>[] {
    return keys.map((key) => ({
        accessorKey: key as string,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={String(key).toUpperCase()} />
        ),
    })) as ColumnDef<T>[];
}
