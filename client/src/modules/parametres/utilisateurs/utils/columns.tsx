"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/components/DataTableColumnHeader";

// Fonction pour générer automatiquement les colonnes
export function generateColumns<T>(fields: { key: keyof T; title: string }[]): ColumnDef<T>[] {
    return fields.map((field) => ({

        accessorKey: field.key,

        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={field.title} />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue(field.key as string)}</div>
        ),
    }));
}
