import api from "@/core/services/apiConfig"
import { RegisterResponseType, RegisterType } from "../typeScript/AuthTypes"

// Inscription d'un utilisateur
export const register = async (dataRegister: RegisterType): Promise<RegisterResponseType | undefined> => {
    try {
        // Appel à l'API pour enregistrer un nouvel utilisateur
        const response = await api.post('/register', dataRegister)
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error)
        return undefined;
    }
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