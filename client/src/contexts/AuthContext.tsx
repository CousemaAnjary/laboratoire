/* eslint-disable react-refresh/only-export-components */
import Cookies from "js-cookie"
import { isAuthenticated } from "@/utils/auth"
import { AuthContextType, LoginType, UserType } from "@/typeScript/Type"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { login as loginService, logout as logoutService } from '../services/authService'



/**
 * ! Création du contexte 
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined)


/**
 * ! Installation du contexte (Provider) 
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    /**
     * ! STATE (état, données) de l'application
     */
    const [user, setUser] = useState<UserType | null>(null)
    const [auth, setAuth] = useState<boolean>(isAuthenticated())


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {
        // Vérification si l'utilisateur est connecté
        if (auth) {
            // Récupération des données de l'utilisateur
            const storedUser = localStorage.getItem('user')

            // Si les données de l'utilisateur sont présentes
            if (storedUser) {
                setUser(JSON.parse(storedUser))
            }
        }
    }, [auth, user])

    
    // Authentification de l'utilisateur
    const login = async (dataLogin: LoginType) => {
        try {
            // Appel à l'API pour authentifier un utilisateur
            const response = await loginService(dataLogin)

            if (response) {
                setAuth(true) // Authentifier l'utilisateur
                const { user } = response // Extraire les données de l'utilisateur de la réponse
                localStorage.setItem('user', JSON.stringify(user)) // Stoker les données de l'utilisateur dans le local storage
                setUser(user) // Mettre à jour les données de l'utilisateur
            }

        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    const logout = async () => {
        try {
            // Appel à l'API pour déconnecter un utilisateur
            await logoutService()
            Cookies.remove('auth_token') // Supprimer le token du cookie
            setAuth(false) // Déconnecter l'utilisateur
            localStorage.removeItem('user') // Supprimer les informations de l'utilisateur du localStorage
            setUser(null) // Mettre à jour les données de l'utilisateur

        } catch (error) {
            console.error('Logout failed:', error)
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
export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuth doit être utilisé dans un AuthProvider')
    }

    return context
}