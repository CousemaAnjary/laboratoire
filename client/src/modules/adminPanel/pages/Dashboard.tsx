import { Button } from "@/core/components/ui/button";
import { useAuth } from "@/core/contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    /**
     * ! STATE (état, données) de l'application
     */
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
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
            <h1>Dashboard Admin</h1>
            <p className="text-sm font-medium leading-none mb-1"> {user?.last_name} {user?.first_name}</p>

            <Button onClick={handleLogout}>
                Se déconnecter
            </Button>
        </>
    )
}