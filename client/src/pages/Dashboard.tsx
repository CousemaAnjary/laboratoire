import Navbar from "@/components/adminPanel/Navbar"




export default function Dashboard() {
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
            <div className="min-h-screen flex flex-col">
                {/* En-tête */}
                <header>
                    <Navbar />
                </header>

                {/* Contenu principal */}
                <main className="flex flex-grow justify-center items-center p-4 z-10">
                    <div className="w-full max-w-md">

                    </div>
                </main>


                {/* Pied de page (optionnel) */}
                {/* <footer className="w-full bg-slate-900 text-white p-4 text-center">
                    <p>&copy; 2024 Votre Société. Tous droits réservés.</p>
                </footer> */}
            </div>

        </>
    )
}