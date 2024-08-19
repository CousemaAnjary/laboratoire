import Navbar from "@/components/adminPanel/Navbar";
import Sidebar from "@/components/adminPanel/Sidebar";
import useSidebarToggle from "@/hooks/useSidebarToggle";
import { cn } from "@/lib/utils";

export default function Dashboard({ children }: { children: React.ReactNode }) {
    const { isOpen } = useSidebarToggle();

    return (
        <div className="min-h-screen flex flex-row">
            {/* Sidebar */}
            <Sidebar />

            {/* Conteneur principal */}
            <div
                className={cn(
                    "flex flex-col flex-grow transition-all duration-300 ease-in-out",
                    isOpen ? "ml-72" : "ml-[90px]"
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
    );
}
