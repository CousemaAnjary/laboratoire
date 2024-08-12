import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"


export default function Dashboard() {
    /**
     * ! STATE (état, données) de l'application
     */
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleLogout = async () => {
        try {
            await logout()
            navigate('/login')
        } catch (error) {
            console.error('Logout failed:', error)
        }
    };

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <h1>Dashboard</h1>
            <p>Bonjour {user?.first_name} {user?.last_name}</p>
            <Button onClick={handleLogout}>Déconnexion</Button>
        </>
    )
}