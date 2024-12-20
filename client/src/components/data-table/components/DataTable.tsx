import * as React from "react"
import { DataTableToolbar } from "./DataTableToolbar"
import { DataTablePagination } from "./DataTablePagination"
import { DataTableProps } from "../typeScript/dataTableType"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"


export function DataTable<TData>({ columns, data, filterableColumns }: DataTableProps<TData>) {
    /**
     * ! STATE (état, données) de l'application
     */
    const [rowSelection, setRowSelection] = React.useState({}) // Sélection des lignes
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({}) // Visibilité des colonnes
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]) // Filtres appliqués aux colonnes
    const [sorting, setSorting] = React.useState<SortingState>([]) // État du tri

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const table = useReactTable({
        data, // Données à afficher
        columns, // Colonnes définies
        state: {
            sorting, // Tri
            columnVisibility, // Visibilité des colonnes
            rowSelection, // Sélection des lignes
            columnFilters, // Filtres
        },
        enableRowSelection: true, // Active la sélection des lignes
        onRowSelectionChange: setRowSelection, // Gestion de la sélection des lignes
        onSortingChange: setSorting, // Gestion du tri
        onColumnFiltersChange: setColumnFilters, // Gestion des filtres
        onColumnVisibilityChange: setColumnVisibility, // Gestion de la visibilité des colonnes
        getCoreRowModel: getCoreRowModel(), // Modèle de lignes de base
        getFilteredRowModel: getFilteredRowModel(), // Modèle de lignes filtrées
        getPaginationRowModel: getPaginationRowModel(), // Modèle de lignes paginées
        getSortedRowModel: getSortedRowModel(), // Modèle de lignes triées
        getFacetedRowModel: getFacetedRowModel(), // Modèle de lignes avec facettes
        getFacetedUniqueValues: getFacetedUniqueValues(), // Valeurs uniques pour le filtrage
    })

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="space-y-4">
            {/* Toolbar for filters and actions */}
            <DataTableToolbar table={table} filterableColumns={filterableColumns} />

            {/* ScrollArea de ShadCN pour le défilement horizontal */}
            <ScrollArea className="w-full overflow-x-auto rounded-md border">
                <div className="min-w-full">
                    <Table>
                        {/* En-tête du tableau */}
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead
                                            key={header.id}
                                            colSpan={header.colSpan}
                                            className="px-4 py-2"
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header, // Rendu du contenu de l'en-tête
                                                    header.getContext() // Contexte de l'en-tête
                                                )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>

                        {/* Corps du tableau */}
                        <TableBody>
                            {table.getRowModel().rows?.length > 0 ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"} // Marque les lignes sélectionnées
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                className="px-4 py-3"
                                                key={cell.id}
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell, // Rendu du contenu de la cellule
                                                    cell.getContext() // Contexte de la cellule
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    {/* Message affiché lorsqu'il n'y a aucun résultat */}
                                    <TableCell colSpan={columns.length} className="h-16 text-center bg-gray-50">
                                        Aucun résultat
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                
                {/* Barre de défilement horizontal de ShadCN */}
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {/* Pagination pour le tableau */}
            <DataTablePagination table={table} />
        </div>
    );
}
