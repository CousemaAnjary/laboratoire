import Navbar from "@/components/adminPanel/Navbar";
// import { cn } from "@/lib/utils"
import useSidebarToggle from "@/hooks/useSidebarToggle"
import Sidebar from "@/components/adminPanel/Sidebar"


export default function Dashboard() {
    const { isOpen } = useSidebarToggle();

    return (
        <div className="h-full w-full">
            {/* Navbar */}
           <Navbar /> 

            <div className="flex h-full overflow-x-hidden">
                {/* Left Sidebar */}

                <Sidebar />


                {/* Main Content */}
                <main className={`flex-grow transition-all duration-300 ease-in-out mt-12${isOpen ? 'mr-20' : 'mr-20'}`}>
                    {/* Contenu principal */}
                    <div className="flex flex-col h-full">

                    </div>
                </main>

            </div>
        </div>
    );
}
