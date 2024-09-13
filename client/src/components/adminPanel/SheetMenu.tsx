import Menu from "@/components/adminPanel/Menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger, } from "@/components/ui/sheet"
import { CodeXml, PanelLeftOpen } from "lucide-react"
import { Link, useLocation } from "react-router-dom"


export function SheetMenu() {
    /**
     * ! STATE (état, données) de l'application
     */
    // Utilise useLocation pour obtenir le pathname actuel
    const location = useLocation()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Sheet>
            {/* Trigger for the Sheet, hidden on large screens */}
            <SheetTrigger className="lg:hidden" asChild>
                <Button
                    className="h-8"
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                >
                    <PanelLeftOpen size={20} />
                </Button>
            </SheetTrigger>

            {/* Content of the Sheet */}
            <SheetContent
                className="sm:w-72 px-3 h-full flex flex-col"
                side="left"
            >
                <SheetHeader>
                    <Button
                        className="flex justify-center items-center pb-2 pt-1"
                        variant="link"
                        asChild
                    >
                        <Link to="/dashboard" className="flex items-center gap-2">
                            <CodeXml className="w-6 h-6 mr-1" />
                        </Link>
                    </Button>
                </SheetHeader>

                {/* Main Menu */}
                <Menu isOpen pathname={location.pathname} />
            </SheetContent>
        </Sheet>
    );
}
