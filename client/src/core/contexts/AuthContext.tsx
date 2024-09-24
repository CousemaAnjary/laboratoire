/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { AuthContextType, LoginType, UserType } from "@/modules/auth/typeScript/AuthTypes"
import { login as loginService, logout as logoutService, isAuthenticated } from '@/modules/auth/services/authService'

/**
 * ! Création du contexte (valeurs par défaut) 
 */
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: null,
    login: () => { },
    logout: () => { }
})

/**
 * ! Installation du contexte (Provider) 
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    /**
      * *  STATE (état, données) de l'application
     */
    const [user, setUser] = useState<UserType | null>(null)
    const [auth, setAuth] = useState<boolean>(false)

    /**
     * * COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {
        // Vérifier si l'utilisateur est authentifié
        const checkAuth = async () => {
            try {
                // Appel de la fonction pour vérifier l'authentification
                const response = await isAuthenticated()
                setAuth(response)

                if (response) {
                    // Récupérer les données de l'utilisateur depuis le local storage
                    const userData = JSON.parse(localStorage.getItem('user') || 'null')
                    setUser(userData)
                }

            } catch (error) {
                console.error('Erreur lors de la vérification de l\'authentification:', error)
            }
        }
        checkAuth()
    }, [])


    // Authentification de l'utilisateur
    const login = async (dataLogin: LoginType) => {

        try {
            // Appel à l'API pour authentifier un utilisateur
            const response = await loginService(dataLogin)

            if (response.token) {
                // Stocker le token JWT dans localStorage
                localStorage.setItem('token', response.token)
                // Stoker les données de l'utilisateur dans le local storage
                localStorage.setItem('user', JSON.stringify(response.user))
                setUser(response.user)
                setAuth(true)
            }

        } catch (error) {
            console.error('Erreur lors de l\'authentification:', error)
        }
    }


    // Déconnexion de l'utilisateur
    const logout = async () => {
        try {
            // Appel à l'API pour déconnecter un utilisateur
            await logoutService()
            // Supprimer le token dans localStorage
            localStorage.removeItem('token')
            // Supprimer les informations de l'utilisateur du localStorage
            localStorage.removeItem('user')
            setAuth(false)
            setUser(null)
            
        } catch (error) {
            console.error("Erreur lors de la déconnexion:", error)
        }
    };
    /**
     * * AFFICHAGE (render) de l'application
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