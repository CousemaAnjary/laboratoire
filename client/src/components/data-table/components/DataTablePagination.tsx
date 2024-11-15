import { Table } from "@tanstack/react-table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationLink,
    PaginationEllipsis,
} from "@/components/ui/pagination";

interface DataTablePaginationProps<TData> {
    table: Table<TData>;
}

export function DataTablePagination<TData>({
    table,
}: DataTablePaginationProps<TData>) {
    const isPreviousDisabled = !table.getCanPreviousPage();
    const isNextDisabled = !table.getCanNextPage();

    return (
        <div className="flex flex-col items-center justify-between space-y-4 px-2 lg:flex-row lg:space-y-0">
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
                <div className="text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} sur{" "}
                    {table.getFilteredRowModel().rows.length} ligne(s) sélectionnée(s).
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-sm ">Lignes par page</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value));
                        }}
                    >
                        <SelectTrigger className="h-9 w-[70px]">
                            <SelectValue placeholder={table.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[6, 10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                {/* <div className="flex items-center justify-center text-sm">
                    Page {table.getState().pagination.pageIndex + 1} sur{" "}
                    {table.getPageCount()}
                </div> */}
                <div className="flex items-center space-x-2">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={() => table.setPageIndex(0)}
                                    className={isPreviousDisabled ? "opacity-50 pointer-events-none" : ""}
                                />
                            </PaginationItem>
                            {Array.from({ length: table.getPageCount() }, (_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                    size={"sm"}
                                        href="#"
                                        isActive={table.getState().pagination.pageIndex === index}
                                        onClick={() => table.setPageIndex(index)}
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            {table.getPageCount() > 3 && (
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            )}
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                    className={isNextDisabled ? "opacity-50 pointer-events-none" : ""}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    );
}
