import { handleGoogleCallback } from '@/services/authGoogleService'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function GoogleCallback() {
    /**
     * ! STATE (état, données) de l'application
     */
    const navigate = useNavigate()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {
        const authenticateWithGoogle = async () => {
            try {
                await handleGoogleCallback()
                // Rediriger vers le tableau de bord ou une autre page
                navigate('/dashboard')

            } catch (error) {

                console.error('Erreur lors de la connexion via Google:', error);
                // Vous pouvez également rediriger vers une page d'erreur ou de login ici
            }
        }

        authenticateWithGoogle()

    }, [navigate])



    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div>
            <h1>Connexion en cours...</h1>
        </div>
    )

}