/* eslint-disable react-refresh/only-export-components */
import { isAuthenticated } from "@/utils/auth"
import { login as loginService } from '../services/authService'
import { AuthContextType, LoginType, UserType } from "@/typeScript/Type"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"


/**
 * ! Création du contexte 
 */
const AuthContext = createContext<AuthContextType >({
    isAuthenticated : false,
    user: null,
    login: async () => {} 
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

            if (response.token) {
                setAuth(true) // Authentifier l'utilisateur
                const { user } = response // Extraire les données de l'utilisateur de la réponse
                localStorage.setItem('user', JSON.stringify(user)) // Stoker les données de l'utilisateur dans le local storage
                setUser(user) // Mettre à jour les données de l'utilisateur       
            }

        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    // const logout = async () => {
    //     try {
    //         // Appel à l'API pour déconnecter un utilisateur
    //         await logoutService()
    //         Cookies.remove('auth_token') // Supprimer le token du cookie
    //         setAuth(false) // Déconnecter l'utilisateur
    //         localStorage.removeItem('user') // Supprimer les informations de l'utilisateur du localStorage
    //         setUser(null) // Mettre à jour les données de l'utilisateur

    //     } catch (error) {
    //         console.error('Logout failed:', error)
    //     }
    // }


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <AuthContext.Provider value={{ isAuthenticated: auth, user, login }}>
            {children}
        </AuthContext.Provider>
    )
}

/**
 * ! Consommation du contexte (hook)
 */
export const useAuth = () =>  useContext(AuthContext)