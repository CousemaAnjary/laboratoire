import api from "@/core/services/apiConfig"
import { RegisterResponseType, RegisterType } from "../typeScript/AuthTypes"

// Inscription d'un utilisateur
export const register = async (dataRegister: RegisterType): Promise<RegisterResponseType> => {
    const response = await api.post('/register', dataRegister)
    console.log('Réponse de l\'API:', response.data)
    return response.data // Retourner les données de la réponse de l'API
}

// Connexion d'un utilisateur
export const login = async () => {
    try {
        // Appel à l'API pour authentifier un utilisateur
        const response = await api.post('/login')
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'authentification:', error)
    }
}