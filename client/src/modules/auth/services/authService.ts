import api from "@/core/services/apiConfig"

// Inscription d'un utilisateur
export const register = async () => {
    try {
        // Appel à l'API pour enregistrer un nouvel utilisateur
        const response = await api.post('/register')
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error)
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