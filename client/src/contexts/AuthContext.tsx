/* eslint-disable react-refresh/only-export-components */
import { AuthContextType, LoginType, UserType } from "@/typeScript/Type"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { isAuthenticated, login as loginService } from '../services/authService'
import { useNavigate } from "react-router-dom"


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
    const [user, setUser] = useState<UserType | null>(null)
    const [auth, setAuth] = useState<boolean>(false)


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {
        // Vérifier si l'utilisateur est authentifié
        const checkAuth = async () => {

            // Appel à l'API pour vérifier si l'utilisateur est authentifié
            const isAuth = await isAuthenticated()
            setAuth(isAuth) // Authentifier l'utilisateur

            if (isAuth) {
                // Récupération des données de l'utilisateur
                const storedUser = localStorage.getItem('user')

                if (storedUser) {
                    setUser(JSON.parse(storedUser)) // Mettre à jour les données de l'utilisateur
                }
            }
        }
        checkAuth()
    }, [])


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
                navigate('/dashboard') // Rediriger l'utilisateur vers le tableau de bord
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
export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth doit être utilisé dans un AuthProvider')
    }

    return context
}