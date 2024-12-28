import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {Roles } from "../typeScript/utilisateurType";
import { UtilisateurRowActions } from "../components/UtilisateurRowActions";
import { DataTableColumnHeader } from "@/components/data-table/components/DataTableColumnHeader";



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
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("name")}</div>,
    },
    // {
    //     accessorKey: "description",
    //     header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    //     cell: ({ row }) => <div className="font-inter text-slate-800">{row.getValue("description")}</div>,
    // },
    {
        accessorKey: "permissions",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Permissions" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{(row.getValue("permissions") as string[]).join(", ")}</div>,
    },
    // {
    //     accessorKey: "dateCreation",
    //     header: ({ column }) => <DataTableColumnHeader column={column} title="Date de Création" />,
    //     cell: ({ row }) => <div className="font-inter text-slate-800">{row.getValue("dateCreation")}</div>,
    // },
    {
        accessorKey: "utilisateursAssignes",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Utilisateurs Assignés" />,
        cell: ({ row }) => <div className="font-inter text-slate-800">{row.getValue("utilisateursAssignes")} utilisateurs</div>,
    },

   
    {
        accessorKey: "statut",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Statut" />,
        cell: ({ row }) => <div className="capitalize font-inter text-slate-800">{row.getValue("statut")}</div>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "derniereMiseAJour",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Dernière Mise à Jour" />,
        cell: ({ row }) => <div className="font-inter text-slate-800">{row.getValue("derniereMiseAJour")}</div>,
    },
  
    {
        id: "actions",
        header: () => (<div className="uppercase font-inter text-xs text-slate-600">Actions</div>),
        cell: ({ row }) => <UtilisateurRowActions row={row} />,
    },
];
