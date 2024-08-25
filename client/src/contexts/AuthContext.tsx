/* eslint-disable react-refresh/only-export-components */
import { UserType } from "@/typeScript/User"
import { isAuthenticated } from "@/utils/auth"
import { AuthContextType, LoginType } from "@/typeScript/Auth"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { login as loginService, logout as logoutService } from '../services/authService'


/**
 * ! Création du contexte (valeurs par défaut) 
 */
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: null,
    login: async () => { },
    logout: async () => { }
})


/**
 * ! Installation du contexte (Provider) 
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    /**
     * ! STATE (état, données) de l'application
     */

    const [user, setUser] = useState<UserType | null>(null)
    const [auth, setAuth] = useState(isAuthenticated())

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {

        if (auth) {
            // Récupérer les données de l'utilisateur depuis le local storage
            const storedUser = localStorage.getItem('user')

            if (storedUser) {
                // Mettre à jour les données de l'utilisateur
                setUser(JSON.parse(storedUser))
            }
        }
    }, [auth])


    // Authentification de l'utilisateur
    const login = async (dataLogin: LoginType) => {
        try {
            // Appel à l'API pour authentifier un utilisateur
            const response = await loginService(dataLogin)
            const { user } = response

            if (response.token) {
                // Stocker le token JWT dans localStorage
                localStorage.setItem('token', response.token)
                setAuth(true) // Authentifier l'utilisateur
                // Stoker les données de l'utilisateur dans le local storage
                localStorage.setItem('user', JSON.stringify(user))
                setUser(user) // Mettre à jour les données de l'utilisateur       
            }

        } catch (error) {
            console.error('Erreur lors de l\'authentification:', error)
        }
    }

    const logout = async () => {
        try {
            // Appel à l'API pour déconnecter un utilisateur
            await logoutService()
            // Supprimer le token dans localStorage
            localStorage.removeItem('token')
            setAuth(false) // Déconnecter l'utilisateur
            // Supprimer les informations de l'utilisateur du localStorage
            localStorage.removeItem('user')
            setUser(null) // Mettre à jour les données de l'utilisateur

        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error)
        }
    }


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <AuthContext.Provider value={{ isAuthenticated: auth, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

/**
 * ! Consommation du contexte (hook)
 */
export const useAuth = () => useContext(AuthContext)