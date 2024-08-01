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
            <div className="relative min-h-screen bg-slate-300">
                <div className="w-full">
                    <Navbar />
                </div>
                <div className="bg-slate-800 flex justify-center">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}