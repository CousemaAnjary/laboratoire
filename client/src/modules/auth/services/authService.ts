import api from "@/core/services/apiConfig"
import { LoginResponseType, LoginType, RegisterResponseType, RegisterType } from "../typeScript/AuthTypes"

// Inscription d'un utilisateur
export const register = async (dataRegister: RegisterType): Promise<RegisterResponseType> => {
    const response = await api.post('/register', dataRegister)
    return response.data // Retourner les données de la réponse de l'API
}

// Connexion d'un utilisateur
export const login = async (dataLogin: LoginType): Promise<LoginResponseType> => {
    const response = await api.post('/login', dataLogin)
    return response.data // Retourner les données de la réponse de l'API
}