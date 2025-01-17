import { DataTableColumnHeader } from "@/components/data-table/components/DataTableColumnHeader";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { RolesPermissionsActions } from "../components/RolesPermissionsActions";
import { Roles } from "../typeScript/rolesPermissionsType";



export const columns: ColumnDef<Roles>[] = [
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
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Nom du Profil" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">  {(row.getValue("name") as string).replace(/([A-Z])/g, ' $1').trim()}</div>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    // {
    //     accessorKey: "description",
    //     header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    //     cell: ({ row }) => <div className="font-inter text-slate-800">{row.getValue("description")}</div>,
    // },
    {
        accessorKey: "permissions",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Permissions" />,
        cell: ({ row }) => (
            <div className="capitalize font-inter text-slate-800">
                {/* Transformation des permissions en une liste de noms */}
                {(row.getValue("permissions") as { id: number; name: string }[])
                    .map((permission) => permission.name)
                    .join(", ") || "Aucune permission"}
            </div>
        ),
    },
    // {
    //     accessorKey: "dateCreation",
    //     header: ({ column }) => <DataTableColumnHeader column={column} title="Date de Création" />,
    //     cell: ({ row }) => <div className="font-inter text-slate-800">{row.getValue("dateCreation")}</div>,
    // },
    {
        accessorKey: "users_count",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Utilisateurs Assignés" />,
        cell: ({ row }) => {
            const usersCount = row.getValue("users_count") as number;
            return (
                <div className="font-inter text-slate-800">
                    {usersCount} utilisateur{usersCount > 1 ? "s" : ""}
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },

    },


    // {
    //     accessorKey: "statut",
    //     header: ({ column }) => <DataTableColumnHeader column={column} title="Statut" />,
    //     cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("statut")}</div>,
    //     filterFn: (row, id, value) => {
    //         return value.includes(row.getValue(id));
    //     },
    // },
    // {
    //     accessorKey: "derniereMiseAJour",
    //     header: ({ column }) => <DataTableColumnHeader column={column} title="Dernière Mise à Jour" />,
    //     cell: ({ row }) => <div className="font-inter text-slate-800">{row.getValue("derniereMiseAJour")}</div>,
    // },

    {
        id: "actions",
        header: () => (<div className="uppercase font-inter text-xs text-slate-600">Actions</div>),
        cell: ({ row }) => <RolesPermissionsActions row={row} />,
    },
];
