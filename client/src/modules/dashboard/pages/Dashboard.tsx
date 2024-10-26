import { useEffect } from "react"
import { toast, Toaster } from "sonner"
import PanelLayout from "../components/Layout"


export default function Dashboard() {
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
            <Toaster richColors /> {/* Affichage des messages d'alerte */}
            <PanelLayout>
                <div className="flex flex-col gap-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                    </div>
                    <div className="aspect-video rounded-xl bg-muted/50" />
                </div>

            </PanelLayout>
        </>
    )
}