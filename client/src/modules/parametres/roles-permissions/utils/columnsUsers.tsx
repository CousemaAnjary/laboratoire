
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Users } from "../typeScript/rolesPermissionsType";
import { DataTableColumnHeader } from "@/components/data-table/components/DataTableColumnHeader";
import RolesUsersActions from "../components/RolesUsersActions";




export const columnsUsers: ColumnDef<Users>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Tout sélectionner"
                className="translate-y-0.5 border-slate-600 data-[state=checked]:bg-blue-800"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Sélectionner la ligne"
                className="translate-y-0.5 border-slate-600 data-[state=checked]:bg-blue-800"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "last_name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Nom" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("last_name")}</div>,
    },
    {
        accessorKey: "first_name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Prénom" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("first_name")}</div>,
    },

    {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
        cell: ({ row }) => <div className="font-inter text-slate-800">{row.getValue("email")}</div>,
    },

    {
        id: "actions",
        header: () => (<div className="uppercase font-inter text-xs text-slate-600">Actions</div>),
        cell: ({ row }) => <RolesUsersActions row={row} />,
    },
];
