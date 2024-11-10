import { DataTableProps } from "../typeScript/dataTableType"
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"



export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    /**
     * ! STATE (état, données) de l'application
     */

    // Utilisation du hook useReactTable pour gérer les données du tableau
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>

                    {/* Affichage des en-têtes de colonnes */}
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>


                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>

                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>

                    {/* Affichage des lignes de données */}
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))

                    ) : (
                        <TableRow>

                            {/* Aucun résultat */}
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                Aucun résultat.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>

            </Table>
        </div>
    );
}