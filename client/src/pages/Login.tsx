import Navbar from "@/components/Navbar"
import LoginForm from "@/components/LoginForm"

export default function Login() {
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
            <div className="min-h-screen  flex flex-col">
                {/* En-tête */}
                <header className="w-full">
                    <Navbar />
                </header>

                {/* Contenu principal */}
                <main className="flex flex-grow justify-center items-center  p-4">
                    <div className="w-full max-w-md">
                        <LoginForm />
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
