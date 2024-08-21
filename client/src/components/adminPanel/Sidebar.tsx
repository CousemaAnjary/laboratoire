import Menu from '@/components/adminPanel/Menu'
import SidebarToggle from '@/components/adminPanel/SidebarToggle'
import { useSidebarToggle } from '@/hooks/useSidebarToggle'
import { cn } from '@/lib/utils'
import { CodeXml } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'


export default function Sidebar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const pathname = window.location.pathname
    const { isOpen, setIsOpen } = useSidebarToggle()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div
                className={cn(
                    'fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300',
                    isOpen === false ? "w-[90px]" : "w-72"
                )}
            >
                <SidebarToggle isOpen={isOpen} toggleSidebar={setIsOpen} />

                <div className="relative h-full flex flex-col px-3 py-3 shadow-md dark:shadow-zinc-800">
                    <Button
                        className={cn(
                            "transition-transform ease-in-out duration-300 mb-1",
                            isOpen === false ? "translate-x-1" : "translate-x-0"
                        )}
                        variant="link"
                        asChild
                    >
                        <Link to="/dashboard" className="flex items-center gap-2">
                            <CodeXml className="w-6 h-6 mr-1" />
                            {/* <h1
                                className={cn(
                                    "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 ",
                                    isOpen === false
                                        ? "-translate-x-96 opacity-0 hidden"
                                        : "translate-x-0 opacity-100"
                                )}
                            >
                              Cousema Anjary
                            </h1> */}
                        </Link>
                    </Button>
                    <Menu isOpen={isOpen} pathname={pathname} />
                </div>
            </div>
        </>
    )
}