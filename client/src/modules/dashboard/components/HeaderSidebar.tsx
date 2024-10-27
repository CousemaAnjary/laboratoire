import { CodeXml } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarMenuButton } from "@/components/ui/sidebar"


export default function HeaderSidebar() {
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
            <SidebarMenuButton size="lg">
                <Button className="flex aspect-square size-8 items-center justify-center rounded-md bg-blue-900 hover:bg-blue-900 text-sidebar-primary-foreground">
                    <CodeXml className="size-6" />
                </Button>
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                        Laboratoire 
                    </span>
                </div>
            </SidebarMenuButton>
        </>
    )
}