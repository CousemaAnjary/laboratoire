import api from "./config/apiConfig"
import { LoginType, RegisterType } from "@/typeScript/Auth"

// Inscrire un nouvel utilisateur
export const register = async (dataRegister: RegisterType) => {
    try {
        // Appel à l'API pour enregistrer un nouvel utilisateur
        const response = await api.post('/register', dataRegister)
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error)
    }
}

// connecter un utilisateur
export const login = async (dataLogin: LoginType) => {
    try {
        // Appel à l'API pour authentifier un utilisateur
        const response = await api.post('/login', dataLogin)
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'authentification:', error)
    }
}

// export const isAuthenticated = async (): Promise<boolean> => {
//     try {
//         // Appel à l'API pour vérifier le token
//         const response = await api.get('/auth/verify-token')
//         return response.status === 200 // Retourne true si le token est valide, sinon false

//     } catch (error) {
//         return false
//     }
// }

// Déconnecter un utilisateur
export const logout = async () => {
    try {
        // Appel à l'API pour déconnecter un utilisateur
        await api.post('/logout')

    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error)
    }
}