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
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
                setUser(JSON.parse(storedUser))
            }
        }
    }, [auth, user])

    const login = async (dataLogin: LoginType) => {
        try {
            const response = await loginService(dataLogin);
            if (response) {
                setAuth(true);
                const { user } = response;
                localStorage.setItem('user', JSON.stringify(user));
                setUser(user);
            }
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await logoutService();
            setAuth(false);
            setUser(null);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
            throw error;
        }
    };

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
export const useAuth = (): AuthContextType | undefined => useContext(AuthContext)


