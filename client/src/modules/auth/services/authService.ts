import api from "@/core/services/apiConfig"
import { LoginResponseType, LoginType, RegisterResponseType, RegisterType } from "../typeScript/AuthTypes"
import { handleApiError } from "@/core/utils/handleApiError"

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

// Connexion d'un utilisateur
export const login = async (dataLogin: LoginType): Promise<LoginResponseType> => {
    const response = await api.post('/login', dataLogin)
    return response.data // Retourner les données de la réponse de l'API
}

// // Vérification de l'authentification d'un utilisateur
// export const isAuthenticated = async (): Promise<boolean> => {
//     const response = await api.get('/is-authenticated')
//     return response.data.isAuthenticated // Retourner les données de la réponse de l'API
// }

// Déconnexion d'un utilisateur
export const logout = async () => {
    await api.post('/logout')
}