import { useEffect } from "react"
import { toast, Toaster } from "sonner"
import { useNavigate } from "react-router-dom"
import PanelLayout from "../components/PanelLayout"
import { Button } from "@/core/components/ui/button"
import { useAuth } from "@/core/contexts/AuthContext"


export default function Dashboard() {
    /**
     * ! STATE (état, données) de l'application
     */
    const navigate = useNavigate()
    const { user, logout } = useAuth()

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

    
    const handleLogout = async (): Promise<void> => {

        try {
            await logout()
            // Déconnexion réussie, rediriger vers la page de connexion
            navigate('/login')

        } catch (error) {
            // Afficher l'erreur dans la console
            console.error('Logout failed', error)
        }
    }




    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <Toaster richColors /> {/* Affichage des messages d'alerte */}
            <PanelLayout>
                <h1>Dashboard Admin</h1>
                <p className="text-sm font-medium leading-none mb-1"> {user?.last_name} {user?.first_name}</p>

                <Button onClick={handleLogout}>
                    Se déconnecter
                </Button>
            </PanelLayout>
        </>
    )
}