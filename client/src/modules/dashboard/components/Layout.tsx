import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PanelLayout({ children }: { children: React.ReactNode }) {
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
            {/* Sidebar */}
            <Sidebar />

            {/* Conteneur principal */}
            {/* <Navbar /> */}

            {/* Main content */}
            {/* <main className="container pt-8 pb-8 px-4 sm:px-8">
                {children}
            </main> */}
        </>
    )
}