import { isAuthenticated } from '@/utils/auth'
import { Navigate, Outlet } from "react-router-dom"


export default function PrivateRoute(): JSX.Element {
    /**
     * ! STATE (état, données) de l'application
     */
    

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
   

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
}