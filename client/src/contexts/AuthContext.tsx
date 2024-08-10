/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom"
import { isAuthenticated } from '../utils/auth'
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
    const navigate = useNavigate()
    const [auth, setAuth] = useState<boolean>(isAuthenticated())
    const [user, setUser] = useState<UserType | null>(() => {
        const storedUser = localStorage.getItem('user')
        return storedUser ? JSON.parse(storedUser) : null
    })

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {
        if (auth && !user) {
            // Récupérer les données de l'utilisateur depuis le local storage
            const storedUser = localStorage.getItem('user')

            if (storedUser) {
                // Mettre à jour les données de l'utilisateur
                setUser(JSON.parse(storedUser))
            }
        }
    }, [auth, user])

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
            setAuth(false) // Déconnecter l'utilisateur
            setUser(null) // Supprimer les données de l'utilisateur
            navigate('/login') // Rediriger l'utilisateur vers la page de connexion

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
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuth doit être utilisé dans un AuthProvider')
    }

    return context
}
