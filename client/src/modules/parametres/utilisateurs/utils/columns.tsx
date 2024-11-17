import { Utilisateur } from "./data"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableRowActions } from "@/components/data-table/components/DataTableRowActions"
import { DataTableColumnHeader } from "@/components/data-table/components/DataTableColumnHeader"



export const columns: ColumnDef<Utilisateur>[] = [
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
                className="translate-y-0.5"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-0.5"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "nom",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Nom" />,
        cell: ({ row }) => <div>{row.getValue("nom")}</div>,
    },
    {
        accessorKey: "prénom",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Prénom" />,
        cell: ({ row }) => <div>{row.getValue("prénom")}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
        cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
        accessorKey: "statut",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Statut" />,
        cell: ({ row }) => <div>{row.getValue("statut")}</div>,
    },
    {
        accessorKey: "date_Naissance",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date de Naissance" />,
        cell: ({ row }) => <div>{row.getValue("date_Naissance")}</div>,
    },
    {
        accessorKey: "rôle",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Rôle" />,
        cell: ({ row }) => <div>{row.getValue("rôle")}</div>,
    },
    {
        id: "actions",
        header: () => (<div className="uppercase text-xs font-medium text-slate-900">Actions</div>),
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
];