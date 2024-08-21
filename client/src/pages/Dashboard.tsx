import { cn } from "@/lib/utils"
import Navbar from "@/components/dashboard/Navbar"
import Sidebar from "@/components/dashboard/Sidebar"
import { useSidebarToggle } from "@/hooks/useSidebarToggle"


export default function Dashboard({ children }: { children: React.ReactNode }) {
    /**
     * ! STATE (état, données) de l'application
     */
    const { isOpen } = useSidebarToggle()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Conteneur principal */}
            <div
                className={cn(
                    "flex flex-col flex-grow transition-[margin-left] ease-in-out duration-300",
                    isOpen ? "lg:ml-72" : "lg:ml-[90px]"
                )}
            >
                {/* Navbar */}
                <Navbar />

                {/* Main content */}
                <main className="flex-grow p-4">
                    {children}
                </main>
            </div>
        </div>
    )
}
