import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { DataTableFacetedFilterProps } from "../typeScript/dataTableType"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"


export function DataTableFacetedFilter<TData, TValue>({ column, title, options }: DataTableFacetedFilterProps<TData, TValue>) {
    // Récupère les valeurs uniques de la colonne pour le filtrage
    const facets = column?.getFacetedUniqueValues();

    // État pour stocker les valeurs sélectionnées dans le filtre
    const selectedValues = new Set(column?.getFilterValue() as string[]);

    // Ajouter des journaux pour vérifier les valeurs
    console.log("Facets:", facets);
    console.log("Selected Values:", Array.from(selectedValues));

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 border-dashed">
                    <PlusCircledIcon className="h-4 w-4" />
                    {title}
                    {selectedValues.size > 0 && (
                        <>
                            <Separator orientation="vertical" className="mx-2 h-4" />
                            <Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
                                {selectedValues.size}
                            </Badge>
                            <div className="hidden space-x-1 lg:flex">
                                {selectedValues.size > 2 ? (
                                    <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                                        {selectedValues.size} sélectionnés
                                    </Badge>
                                ) : (
                                    options
                                        .filter((option) => selectedValues.has(option.value))
                                        .map((option) => (
                                            <Badge
                                                variant="secondary"
                                                key={option.value}
                                                className="rounded-sm px-1 font-normal"
                                            >
                                                {option.label}
                                            </Badge>
                                        ))
                                )}
                            </div>
                        </>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={`Rechercher ${title}`} />
                    <CommandList>
                        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => {
                                const isSelected = selectedValues.has(option.value);
                                return (
                                    <CommandItem
                                        key={option.value}
                                        onSelect={() => {
                                            // Ajoute ou supprime l'option sélectionnée
                                            if (isSelected) {
                                                selectedValues.delete(option.value);
                                            } else {
                                                selectedValues.add(option.value);
                                            }

                                            const filterValues = Array.from(selectedValues);
                                            column?.setFilterValue(
                                                filterValues.length ? filterValues : undefined
                                            );

                                            // Ajouter un journal pour vérifier les valeurs après sélection
                                            console.log("Updated Selected Values:", filterValues);
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                isSelected
                                                    ? "bg-primary text-primary-foreground"
                                                    : "opacity-50 [&_svg]:invisible"
                                            )}
                                        >
                                            <CheckIcon className="h-4 w-4" />
                                        </div>
                                        {option.icon && (
                                            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                                        )}
                                        <span>{option.label}</span>
                                        {facets?.get(option.value) && (
                                            <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                                                {facets.get(option.value)}
                                            </span>
                                        )}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                        {selectedValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => {
                                            column?.setFilterValue(undefined);
                                            console.log("Filters Cleared");
                                        }}
                                        className="justify-center text-center"
                                    >
                                        Effacer les filtres
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
