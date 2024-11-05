import { Toaster } from "sonner"
import { cn } from "@/lib/utils"

import RegisterForm from "../components/RegisterForm"

import Navbar from "@/components/Navbar"
import GridPattern from "@/components/magicui/grid-pattern"


export default function Register() {
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
                        <RegisterForm />
                    </section>
                </main>

                {/* Pied de page */}
                <footer></footer>
            </div>
        </>

    )
}