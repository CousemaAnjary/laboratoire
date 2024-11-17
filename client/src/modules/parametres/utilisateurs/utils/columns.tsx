import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Utilisateur } from "../typeScript/utilisateurType"
import { UtilisateurRowActions } from "../components/UtilisateurRowActions"
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
                className="translate-y-0.5  border-slate-600 data-[state=checked]:bg-blue-800"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-0.5  border-slate-600 data-[state=checked]:bg-blue-800"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "nom",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Nom" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("nom")}</div>,
    },
    {
        accessorKey: "prénom",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Prénom" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("prénom")}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "statut",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Statut" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("statut")}</div>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "date_Naissance",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date de Naissance" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("date_Naissance")}</div>,
    },
    {
        accessorKey: "rôle",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Rôle" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("rôle")}</div>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        header: () => (<div className="uppercase  font-inter text-xs text-slate-600">Actions</div>),
        cell: ({ row }) => <UtilisateurRowActions row={row} />,
    },
]