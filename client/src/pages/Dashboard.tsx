import Navbar from "@/components/adminPanel/Navbar";
import Sidebar from "@/components/adminPanel/Sidebar";
import { cn } from "@/lib/utils";
import useSidebarToggle from "@/hooks/useSidebarToggle";


export default function Dashboard({ children }: { children: React.ReactNode }) {
    const { isOpen } = useSidebarToggle();

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Contenu principal */}
            <div
                className={cn(
                    "flex-grow transition-all duration-300 ease-in-out",
                    isOpen ? "ml-72" : "ml-[90px]"
                )}
            >
                {/* Navbar */}
                <Navbar />

                {/* Main content */}
                <main className="p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
