// columns.ts
import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "./data"; // Import du type Payment

// Définition des colonnes en utilisant ColumnDef de @tanstack/react-table
export const columns: ColumnDef<Payment>[] = [
    // { accessorKey: "id", header: "ID" },
    { accessorKey: "nom", header: "Nom" },
    { accessorKey: "prenom", header: "Prénom" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "statut", header: "Statut" },
    { accessorKey: "rôle", header: "Rôle" },
];
