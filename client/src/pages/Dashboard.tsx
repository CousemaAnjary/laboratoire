import { useAuth } from "@/contexts/AuthContext"


export default function Dashboard() {
    /**
     * ! STATE (état, données) de l'application
     */
    const { user } = useAuth()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <h1>Dashboard</h1>
            <p>Bonjour {user?.first_name} {user?.last_name}</p>
        </>
    )
}