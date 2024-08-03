import axios from 'axios'
import Cookies from 'js-cookie'


// Récupérer l'URL de base de l'API à partir des variables d'environnement
const API_URL: string = import.meta.env.VITE_BACKEND_API_URL

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true // Pour envoyer les cookies avec les requêtes
})


// Ajouter un intercepteur de requêtes pour inclure le token dans les en-têtes
api.interceptors.request.use((config) => {

    // Récupérer le token d'authentification depuis le cookie
    const token = Cookies.get('auth_token')

    if (token) {
        // Ajouter le token JWT aux en-têtes d'authentification
        config.headers.Authorization = `Bearer ${token}`
    }

    return config // Retourner la configuration modifiée

}, (error) => {
    return Promise.reject(error)
})

export default api