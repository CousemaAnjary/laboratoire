// Le type des données de connexion
export type LoginType = {
    email: string
    password: string
}

// Le type des données d'inscription
export type RegisterType = {
    last_name: string
    first_name: string
    email: string
    password: string
    image?: File
}

// Le type des informations utilisateur
export type UserType = {
    id: string
    first_name: string
    last_name: string
    email: string
    image: string
}

// Le type pour le contexte d'authentification
export type AuthContextType = {
    isAuthenticated: boolean 
    user: UserType | null
    login: (dataLogin: LoginType) => Promise<void>
    logout: () => Promise<void>
}
