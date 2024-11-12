"use client";
import { ColumnDef, HeaderContext, Row } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/components/DataTableColumnHeader";
import { Checkbox } from "@/components/ui/checkbox";

// Fonction pour générer automatiquement les colonnes
export function generateColumns<T>(fields: { key: keyof T; title: string }[]): ColumnDef<T>[] {
    // Colonne de sélection
    const selectionColumn: ColumnDef<T> = {
        id: "select",
        header: ({ table }: HeaderContext<T, unknown>) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-0.5"
            />
        ),
        cell: ({ row }: { row: Row<T> }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-0.5"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    };

    // Générer les colonnes des champs
    const fieldColumns = fields.map((field) => ({
        accessorKey: field.key,
        header: ({ column }: HeaderContext<T, unknown>) => (
            <DataTableColumnHeader column={column} title={field.title} />
        ),
        cell: ({ row }: { row: Row<T> }) => (
            <div className="capitalize">{row.getValue(field.key as string)}</div>
        ),
    }));

    // Retourner la colonne de sélection suivie des colonnes des champs
    return [selectionColumn, ...fieldColumns];
}
