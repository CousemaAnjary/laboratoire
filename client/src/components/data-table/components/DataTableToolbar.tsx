import { TrashIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { DataTableFacetedFilter } from "./DataTableFacetedFilter"


interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    filterableColumns?: Array<{
        id: keyof TData;
        title: string;
        options: Array<{
            label: string;
            value: string;
        }>;
    }>;
}

export function DataTableToolbar<TData>({
    table,
    filterableColumns = [],
}: DataTableToolbarProps<TData>) {
    // Vérifiez si des filtres sont appliqués
    // const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-2">
                {/* Champ de saisie pour filtrer par libellé */}
                <Input
                    placeholder="Filtrer les libellés"
                    value={(table.getColumn("nom")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        table.getColumn("nom")?.setFilterValue(event.target.value);
                    }}
                    className="h-8 w-[150px] lg:w-[250px]"
                />

                {/* Boucle sur les colonnes filtrables et les affiche */}
                {filterableColumns.map((column) => (
                    table.getColumn(column.id as string) && (
                        <DataTableFacetedFilter
                            key={String(column.id)}
                            column={table.getColumn(column.id as string)}
                            title={column.title}
                            options={column.options}
                        />
                    )
                ))}

                {/* Bouton de réinitialisation des filtres */}
                {/* {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Réinitialiser
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )} */}
            </div>

            <div className="flex items-center gap-2">
                {/* Bouton pour supprimer les lignes sélectionnées */}
                {table.getFilteredSelectedRowModel().rows.length > 0 ? (
                    <Button variant="outline" size="sm">
                        <TrashIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                        Supprimer ({table.getFilteredSelectedRowModel().rows.length})
                    </Button>
                ) : null}
            </div>
        </div>
    );
}
