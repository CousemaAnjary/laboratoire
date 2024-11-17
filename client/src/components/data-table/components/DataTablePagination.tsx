import { Button } from "@/components/ui/button"
import { DataTablePaginationProps } from "../typeScript/dataTableType"
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationEllipsis } from "@/components/ui/pagination"



export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
    /**
     * ! STATE (état, données) de l'application
     */



    /**
    * ! COMPORTEMENT (méthodes, fonctions) de l'application
    */

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="flex flex-col items-center justify-between space-y-4 px-2 lg:flex-row lg:space-y-0">

            {/* Informations sur les lignes sélectionnées et options de pagination */}
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
                <div className="text-sm text-muted-foreground font-inter">
                    {table.getFilteredSelectedRowModel().rows.length} sur{" "}
                    {table.getFilteredRowModel().rows.length} ligne(s) sélectionnée(s)
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-inter">Lignes par page</p>

                    {/* Sélecteur pour le nombre de lignes par page */}
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value));
                        }}
                    >
                        <SelectTrigger className="h-7 w-[68px]">
                            <SelectValue placeholder={table.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side="right">
                            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    <span className="font-inter text-xs">{pageSize}</span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Pagination pour naviguer entre les pages */}
            <div className="flex items-center space-x-2">
                <Pagination>
                    <PaginationContent>

                        {/* Bouton pour la première page */}
                        <PaginationItem>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0 font-inter"
                                onClick={() => table.setPageIndex(0)}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <span className="sr-only">Go to first page</span>
                                <DoubleArrowLeftIcon className="h-4 w-4" />
                            </Button>
                        </PaginationItem>

                        {/* Liens de page pour naviguer */}
                        {Array.from({ length: table.getPageCount() }, (_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    size={"sm"}
                                    href="#"
                                    className="font-inter"
                                    isActive={table.getState().pagination.pageIndex === index}
                                    onClick={() => table.setPageIndex(index)}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        {/* Ellipsis pour pages supplémentaires (si applicable) */}
                        {table.getPageCount() > 3 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        {/* Bouton pour la dernière page */}
                        <PaginationItem>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0 font-inter"
                                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                disabled={!table.getCanNextPage()}
                            >
                                <span className="sr-only">Go to last page</span>
                                <DoubleArrowRightIcon className="h-4 w-4" />
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
