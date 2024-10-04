import { cn } from "@/lib/utils"
import { useEffect } from "react"
import Navbar from "@/layouts/Navbar"
import { toast, Toaster } from "sonner"
import LoginForm from "../components/LoginForm"
import GridPattern from "@/core/components/magicui/grid-pattern"



export default function Login() {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {
        // Récupération du message de succès dans le localStorage
        const message = localStorage.getItem("success")

        if (message) {
            // Affichage du message de succès
            toast.success(message)
            localStorage.removeItem("success")
        }
    }, [])

 
    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div className="relative min-h-screen">
                <Toaster richColors /> {/* Affichage des messages d'alerte */}
                <GridPattern width={50} height={50} x={-1} y={-1} strokeDasharray={"4 2"} className={cn("absolute inset-0 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]")} />

                {/* En-tête */}
                <header>
                    <Navbar />
                </header>

                {/* Contenu */}
                <main>
                    <section className="flex justify-center items-center min-h-[79vh] mt-5 ">
                        <LoginForm />
                    </section>
                </main>

                {/* Pied de page */}
                <footer></footer>
            </div>
        </>
    )
}