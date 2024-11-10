import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "@/modules/parametres/utilisateurs/utils/data";

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "statut",
        header: "Statut",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "montant",
        header: "Montant",
    },
];
