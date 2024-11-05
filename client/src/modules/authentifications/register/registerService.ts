import api from "@/core/services/apiConfig"
import { handleApiError } from "@/core/utils/handleApiError"
import { RegisterResponseType, RegisterType } from "./registerType"


// Inscription d'un utilisateur
export const register = async (dataRegister: RegisterType): Promise<RegisterResponseType> => {
    try {
        // Appel à l'API pour inscrire un utilisateur
        const response = await api.post('/register', dataRegister)
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        // Gérer les erreurs API (serveur) 
        handleApiError(error)
        throw error
    }
}