// columns.ts
import { ColumnDef } from "@tanstack/react-table";
import { Payment, data } from "@/modules/parametres/utilisateurs/utils/data";

// Création automatique des colonnes en utilisant les clés du type Payment
export const columns: ColumnDef<Payment>[] = Object.keys(data[0]).map((key) => ({
    accessorKey: key,
    header: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
})) as ColumnDef<Payment>[];
