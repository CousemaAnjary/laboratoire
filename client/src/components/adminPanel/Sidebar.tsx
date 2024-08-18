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
                    'fixed  left-0  h-screen transition-[width] ease-in-out duration-300',
                    isOpen ? 'w-72' : 'w-[90px]'
                )}
            >
                <SidebarToggle isOpen={isOpen} toggleSidebar={toggleSidebar} />

                <div className="h-full  flex flex-col px-3  py-4 shadow-md dark:shadow-zinc-800">
                    <Menu isOpen={isOpen} pathname={pathname} />
                </div>
            </div>
        </>
    )
}