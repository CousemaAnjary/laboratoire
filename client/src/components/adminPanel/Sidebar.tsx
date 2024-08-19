import { cn } from '@/lib/utils';
import Menu from '@/components/adminPanel/Menu';
import SidebarToggle from '@/components/adminPanel/SidebarToggle'
import useSidebarToggle from '@/hooks/useSidebarToggle';

export default function Sidebar() {
    const pathname = window.location.pathname;
    const { isOpen, toggleSidebar } = useSidebarToggle();

    return (
        <div
            className={cn(
                'fixed top-0 left-0 z-30 h-screen transition-all duration-300 ease-in-out',
                isOpen ? "w-72" : "w-[90px]"
            )}
        >
            <SidebarToggle isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className="relative h-full flex flex-col px-3 py-4 shadow-md dark:shadow-zinc-800">
                <Menu isOpen={isOpen} pathname={pathname} />
            </div>
        </div>
    )
}
