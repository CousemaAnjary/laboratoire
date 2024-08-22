import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Ellipsis, PlusIcon } from "lucide-react";

interface KanbanListProps {
    title: string;
    children?: React.ReactNode;
}

export default function KanbanList({ title, children }: KanbanListProps) {
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
        <>
            <Card className="flex flex-col w-full max-w-72">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 ">
                    <CardTitle className="text-sm font-medium">{title}</CardTitle>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Ellipsis className="h-4 w-4" />
                    </Button>
                </CardHeader>

                <CardContent className="flex-1 space-y-2 px-4 py-0 overflow-auto">
                    {children}
                </CardContent>

                <CardFooter className="px-4 pt-4">
                    <Button variant="outline" className="w-full justify-start">
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Ajouter une carte
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}