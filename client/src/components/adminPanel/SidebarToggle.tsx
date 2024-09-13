import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SidebarToggleProps } from '@/typeScript/AdminPanel'
import { ChevronLeft } from 'lucide-react'



export default function SidebarToggle({ isOpen, toggleSidebar }: SidebarToggleProps) {
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
            <div className="invisible lg:visible absolute top-[12px] -right-[16px] z-20">
                <Button
                    onClick={toggleSidebar}
                    className="rounded-md w-8 h-8"
                    variant="outline"
                    size="icon"
                >
                    <ChevronLeft
                        className={cn(
                            'h-4 w-4 transition-transform ease-in-out duration-700',
                            isOpen === false ? "rotate-180" : "rotate-0"
                        )}
                    />
                </Button>
            </div>
        </>
    )
}