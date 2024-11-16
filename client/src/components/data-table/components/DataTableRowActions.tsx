import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
    // You can access row data like this:
    const rowData = row.original;

    // Example functions using the row data
    const handleEdit = () => {
        console.log("Editing row:", rowData);
    };

    const handleCopy = () => {
        console.log("Copying row:", rowData);
    };

    const handleDelete = () => {
        console.log("Deleting row:", rowData);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Ouvrir le menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem onClick={handleEdit}>Éditer</DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopy}>Faire une copie</DropdownMenuItem>
                <DropdownMenuItem>Favori</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleDelete}>
                    Supprimer
                    <span className="ml-auto text-xs text-muted-foreground">⌘⌫</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
