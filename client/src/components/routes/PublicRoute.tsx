import { useAuth } from "@/contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"


export default function PublicRoute(): JSX.Element {
    /**
     * ! STATE (état, données) de l'application
     */
    const { isAuthenticated } = useAuth()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />
}