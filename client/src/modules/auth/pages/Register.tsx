import { cn } from "@/lib/utils"
import Navbar from "@/layouts/Navbar"
import { Toaster, toast } from "sonner";
import RegisterForm from "../components/RegisterForm"
import GridPattern from "@/core/components/magicui/grid-pattern"


export default function Register() {
    /**
     * ! STATE (état, données) de l'application
     */
    const handleSuccess = (message: string) => {
        toast.success(message);
    };

    const handleError = (message: string) => {
        toast.error(message);
    };

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div className="relative min-h-screen">
                <Toaster />
                <GridPattern width={50} height={50} x={-1} y={-1} strokeDasharray={"4 2"} className={cn("absolute inset-0 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]")} />

                {/* En-tête */}
                <header>
                    <Navbar />
                </header>

                {/* Contenu */}
                <main>
                    <section className="flex justify-center items-center min-h-[79vh] mt-5 ">
                        <RegisterForm onSuccess={handleSuccess} onError={handleError} />
                    </section>
                </main>

                {/* Pied de page */}
                <footer></footer>
            </div>
        </>

    )
}