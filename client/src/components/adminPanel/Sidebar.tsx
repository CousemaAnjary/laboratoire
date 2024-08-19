import { cn } from '@/lib/utils';
import Menu from '@/components/adminPanel/Menu';
import SidebarToggle from '@/components/adminPanel/SidebarToggle'
import useSidebarToggle from '@/hooks/useSidebarToggle';


export default function Sidebar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const pathname = window.location.pathname
    const { isOpen, toggleSidebar } = useSidebarToggle()

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
                <SidebarToggle isOpen={isOpen} toggleSidebar={toggleSidebar} />

                <div className="relative h-full flex flex-col px-3 py-4 shadow-md dark:shadow-zinc-800">
                    <Menu isOpen={isOpen} pathname={pathname} />
                </div>
            </div>
        </>
    )
}