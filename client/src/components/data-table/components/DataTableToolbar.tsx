// DataTableToolbar.tsx
"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import { TrashIcon } from "lucide-react";

interface FieldProps<T> {
    key: keyof T;
    title: string;
    filterable?: boolean;
    filterOptions?: { label: string; value: string }[];
}

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    fields: FieldProps<TData>[]; // On garde FieldProps pour gérer les filtres
}

export function DataTableToolbar<TData>({
    table,
    fields,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-2">
                <Input
                    placeholder="Filtrer les étiquettes..."
                    value={(table.getColumn("note")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        table.getColumn("note")?.setFilterValue(event.target.value);
                    }}
                    className="h-8 w-[150px] lg:w-[250px]"
                />

                {/* Boucle sur fields pour générer les filtres dynamiquement */}
                {fields && fields.map((field) => {
                    if (field.filterable && table.getColumn(field.key as string)) {
                        return (
                            <DataTableFacetedFilter
                                key={field.key as string}
                                column={table.getColumn(field.key as string)}
                                title={field.title}
                                options={field.filterOptions || []}
                            />
                        );
                    }
                    return null;
                })}


                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Réinitialiser
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>

            <div className="flex items-center gap-2">
                {table.getFilteredSelectedRowModel().rows.length > 0 && (
                    <Button variant="outline" size="sm">
                        <TrashIcon className="mr-2 size-4" aria-hidden="true" />
                        Supprimer ({table.getFilteredSelectedRowModel().rows.length})
                    </Button>
                )}
                {/* DataTableViewOptions sera ajouté ici plus tard */}
            </div>
        </div>
    );
}
