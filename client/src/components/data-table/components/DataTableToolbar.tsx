import { useState } from "react"
import { TrashIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DataTableViewOptions } from "./DataTableViewOptions"
import { DataTableFacetedFilter } from "./DataTableFacetedFilter"
import { DataTableToolbarProps } from "../typeScript/dataTableType"



export function DataTableToolbar<TData>({ table, filterableColumns }: DataTableToolbarProps<TData>) {
    /**
     * ! STATE (état, données) de l'application
     */
    const [globalFilter, setGlobalFilter] = useState("") // État pour le filtre global

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-2">

                {/* Champ de saisie pour le filtre global */}
                <Input
                    placeholder="Filtrer les résultats"
                    value={globalFilter}
                    onChange={(event) => {
                        const searchValue = event.target.value;
                        setGlobalFilter(searchValue); // Mettre à jour l'état local du filtre global
                        table.setGlobalFilter(searchValue); // Appliquer le filtre global au tableau
                    }}
                    className="h-8 w-[150px] lg:w-[250px] shadow-none font-inter text-xs"
                />

                {/* Affichage des filtres facettés pour les colonnes définies */}
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

                {/* Bouton pour supprimer les lignes sélectionnées, s'il y en a */}
                {table.getFilteredSelectedRowModel().rows.length > 0 ? (
                    <Button variant="outline"  className="font-inter text-xs flex items-center">
                        <TrashIcon aria-hidden="true"  className="text-red-600" />
                        <span>Supprimer ({table.getFilteredSelectedRowModel().rows.length})</span>
                    </Button>

                ) : null}

                {/* Options d'affichage du tableau */}
                <DataTableViewOptions table={table} />
            </div>
        </div>
    );
}
