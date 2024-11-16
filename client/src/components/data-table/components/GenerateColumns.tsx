import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { DataTableRowActions } from "./DataTableRowActions";


// Fonction générique pour générer automatiquement les colonnes avec des en-têtes en majuscules et une colonne de sélection
export function GenerateColumns<T>(keys: Array<keyof T>): ColumnDef<T>[] {
    // Colonne de sélection des lignes
    const selectionColumn: ColumnDef<T> = {
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
    }

    // Colonnes générées dynamiquement à partir des clés
    const generatedColumns: ColumnDef<T>[] = keys.map((key) => ({
        accessorKey: key as string,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={key as string} />
        ),
        cell: ({ row }) => (
            <div >{row.getValue(key as string)}</div>
        ),
    })) as ColumnDef<T>[]

    // Colonne d'actions pour chaque ligne
    const actionsColumn: ColumnDef<T> = {
        id: "actions",
        header: () => <div className="uppercase text-xs font-medium text-slate-900">Actions</div>,
        cell: ({ row }) => <DataTableRowActions row={row} />,
        enableSorting: false,
        enableHiding: false,
    };

    // Retourner toutes les colonnes, y compris la colonne de sélection et les actions
    return [selectionColumn, ...generatedColumns, actionsColumn]
}
