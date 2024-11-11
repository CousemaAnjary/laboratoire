"use client";
import { Payment } from "./data";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/components/DataTableColumnHeader";
import { Checkbox } from "@/components/ui/checkbox";

// Définition des colonnes en utilisant ColumnDef de @tanstack/react-table
export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-0.5 shadow-none"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-0.5 shadow-none"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "nom",
        header: ({ column }) => (
            // Assurez-vous que cette syntaxe JSX est correcte
            <DataTableColumnHeader column={column} title="Nom" />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("nom")}</div>
        ),

    },
    {
        accessorKey: "prenom",
        header: ({ column }) => (
            // Assurez-vous que cette syntaxe JSX est correcte
            <DataTableColumnHeader column={column} title="Prénom" />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("prenom")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            // Assurez-vous que cette syntaxe JSX est correcte
            <DataTableColumnHeader column={column} title="Email" />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("email")}</div>
        ),
    },
    {
        accessorKey: "statut",
        header: ({ column }) => (
            // Assurez-vous que cette syntaxe JSX est correcte
            <DataTableColumnHeader column={column} title="Statut" />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("statut")}</div>
        ),
    },
    {
        accessorKey: "rôle",
        header: ({ column }) => (
            // Assurez-vous que cette syntaxe JSX est correcte
            <DataTableColumnHeader column={column} title="Rôle" />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("rôle")}</div>
        ),
    },
];

