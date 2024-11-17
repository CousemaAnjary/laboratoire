import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { DataTableFacetedFilterProps } from "../typeScript/dataTableType"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"


export function DataTableFacetedFilter<TData, TValue>({ column, title, options }: DataTableFacetedFilterProps<TData, TValue>) {
    /**
     * ! STATE (état, données) de l'application
     */
    // État pour stocker les valeurs sélectionnées dans le filtre
    const selectedValues = new Set(column?.getFilterValue() as string[]);

    // Récupère les valeurs uniques de la colonne pour le filtrage
    const facets = column?.getFacetedUniqueValues()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Popover>
            {/* Déclencheur du Popover pour ouvrir les options de filtre */}
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 border-dashed">
                    <PlusCircledIcon className="h-4 w-4" />
                    <span className="font-inter">{title}</span>

                    {/* Affiche le nombre de filtres sélectionnés sous forme de badge */}
                    {selectedValues.size > 0 && (
                        <>
                            <Separator orientation="vertical" className="mx-2 h-4" />
                            <Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
                                {selectedValues.size}
                            </Badge>

                            {/* Affiche les badges des filtres sélectionnés sur les écrans larges */}
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
                                                <span className="font-inter">{option.label}</span>
                                            </Badge>
                                        ))
                                )}
                            </div>
                        </>
                    )}
                </Button>
            </PopoverTrigger>

            {/* Contenu du Popover pour les options de filtrage */}
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>

                    {/* Champ de recherche pour filtrer les options */}
                    <CommandInput placeholder={`Rechercher ${title}`} className="font-inter text-xs" />
                    <CommandList>
                        <CommandEmpty className="font-inter text-sm text-center text-zinc-700 p-4">Aucun résultat trouvé</CommandEmpty>
                        <CommandGroup>

                            {/* Affiche chaque option de filtre avec un bouton de sélection */}
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
                                        }}
                                    >
                                        {/* Checkbox pour indiquer si l'option est sélectionnée */}
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

                                        {/* Option d'icône facultative */}
                                        {option.icon && (
                                            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                                        )}
                                        <span className="font-inter text-xs">{option.label}</span>

                                        {/* Affiche le nombre de fois que cette option apparaît dans les données */}
                                        {facets?.get(option.value) && (
                                            <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                                                {facets.get(option.value)}
                                            </span>
                                        )}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>

                        {/* Option pour effacer tous les filtres si des filtres sont appliqués */}
                        {selectedValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => column?.setFilterValue(undefined)}
                                        className="justify-center text-center font-inter text-xs"
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
