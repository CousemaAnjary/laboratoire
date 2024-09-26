import axios from "axios"
import { toast } from "sonner"

// Fonction utilitaire pour gérer les erreurs API
export const handleApiError = (error: unknown): void => {

    if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data

        // Afficher les erreurs spécifiques à chaque champ
        if (errorData.errors) {
            Object.keys(errorData.errors).forEach((field) => {
                const fieldErrors = errorData.errors[field];
                fieldErrors.forEach((message: string) => {
                    // console.log(`${field}: ${message}`)
                    toast.warning(message)
                })
            })

        } else {
            // Message d'erreur global si disponible
            toast.warning(errorData.message)
        }
    } else {
        // Erreur générique pour les erreurs inattendues
        toast.error("Une erreur inattendue est survenue")
    }
}
