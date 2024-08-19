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

            {/* Conteneur principal */}
            <div
                className={cn(
                    "flex flex-col flex-grow transition-all duration-300 ease-in-out",
                    isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
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
