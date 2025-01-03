import { Button } from "@/components/ui/button"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DataTableViewOptionsProps } from "../typeScript/dataTableType"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, } from "@/components/ui/dropdown-menu"


export function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
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
        <DropdownMenu>
            {/* Déclencheur du menu déroulant */}
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex font-inter"
                >
                    <MixerHorizontalIcon className="h-4 w-4" />
                    Afficher
                </Button>
            </DropdownMenuTrigger>

            {/* Contenu du menu déroulant */}
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel className="text-center font-inter font-normal">
                    Colonnes
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Itère sur toutes les colonnes qui peuvent être masquées/affichées */}
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            typeof column.accessorFn !== "undefined" && column.getCanHide()
                    )
                    .map((column) => (
                        <DropdownMenuCheckboxItem
                            key={column.id}
                            className="capitalize font-inter text-xs truncate  overflow-hidden whitespace-nowrap"
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            title={column.id} // Ajoute une info-bulle pour le texte complet
                        >
                            {column.id}
                        </DropdownMenuCheckboxItem>
                    ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
