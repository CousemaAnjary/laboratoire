import api from "./config/apiConfig"
import { RegisterType } from "@/typeScript/Type"


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