import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DataTableColumnHeaderProps } from "../typeScript/dataTableType"
import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon, EyeNoneIcon, } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


export function DataTableColumnHeader<TData, TValue>({ column, title, className }: DataTableColumnHeaderProps<TData, TValue>) {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */

    // Vérifie si la colonne ne peut pas être triée, alors elle affiche simplement le titre
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            {/* Conteneur pour l'en-tête de la colonne avec le menu de tri */}
            <div className={cn("flex items-center space-x-2", className)}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="-ml-3 h-8 data-[state=open]:bg-accent"
                        >
                            {/* Titre de la colonne en majuscules avec l'icône de tri */}
                            <span className="uppercase font-medium text-slate-900">{title}</span>
                            {column.getIsSorted() === "desc" ? (
                                <ArrowDownIcon className="ml-2 h-4 w-4" />
                            ) : column.getIsSorted() === "asc" ? (
                                <ArrowUpIcon className="ml-2 h-4 w-4" />
                            ) : (
                                <CaretSortIcon className="ml-2 h-4 w-4" />
                            )}
                        </Button>
                    </DropdownMenuTrigger>

                    {/* Contenu du menu déroulant pour les options de tri et de visibilité */}
                    <DropdownMenuContent align="start">
                        {/* Option pour trier en ordre croissant */}
                        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            Asc
                        </DropdownMenuItem>

                        {/* Option pour trier en ordre décroissant */}
                        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            Desc
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        {/* Option pour masquer la colonne */}
                        <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                            <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            Hide
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
}