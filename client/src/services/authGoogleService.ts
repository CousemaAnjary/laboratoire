import { UserType } from "@/typeScript/Type";
import api from "./config/apiConfig"

export const googleAuthRedirect = async () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_API_URL}/auth/google/redirect`
}

export const handleGoogleCallback = async (): Promise<{ token: string, user: UserType } | undefined> => {
    try {
        // Appel à l'API pour gérer le callback de Google
        const response = await api.get('/auth/google/callback')

        // Récupérer le token et les informations de l'utilisateur depuis la réponse
        const { token, user } = response.data

        // Stocker le token et les informations de l'utilisateur dans le localStorage
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))

        // Retourner les données récupérées
        return { token, user }

    } catch (error) {
        console.error('Erreur lors de la récupération du callback Google:', error)
    }
}

export const logout = () => {
    // Supprimer le token et les informations utilisateur du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};
