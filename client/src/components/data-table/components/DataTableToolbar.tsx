import { TrashIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import { useState } from "react";
import { DataTableViewOptions } from "./DataTableViewOptions";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    filterableColumns: Array<{
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
    filterableColumns,
}: DataTableToolbarProps<TData>) {
    // État pour gérer la valeur du filtre global
    const [globalFilter, setGlobalFilter] = useState("");

    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-2">
                {/* Champ de saisie pour le filtre global */}
                <Input
                    placeholder="Filtrer les résultats"
                    value={globalFilter}
                    onChange={(event) => {
                        const searchValue = event.target.value;
                        setGlobalFilter(searchValue); // Mettre à jour l'état
                        table.setGlobalFilter(searchValue); // Appliquer le filtre global
                    }}
                    className="h-8 w-[150px] lg:w-[250px] shadow-none"
                />

                {/* Boucle sur les colonnes filtrables définies dans `data.ts` */}
                {filterableColumns.map((column) =>
                    table.getColumn(column.id as string) ? (
                        <DataTableFacetedFilter
                            key={String(column.id)}
                            column={table.getColumn(column.id as string)}
                            title={column.title}
                            options={column.options}
                        />
                    ) : null
                )}

            </div>

            <div className="flex items-center gap-2">
                {/* Bouton pour supprimer les lignes sélectionnées */}
                {table.getFilteredSelectedRowModel().rows.length > 0 ? (
                    <Button variant="outline" size="sm">
                        <TrashIcon className="h-4 w-4" aria-hidden="true" />
                        Supprimer ({table.getFilteredSelectedRowModel().rows.length})
                    </Button>
                ) : null}
                <DataTableViewOptions table={table} />
            </div>
        </div>
    );
}
