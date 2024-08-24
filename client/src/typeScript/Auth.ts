import { UserType } from "./User"

// Le type des données d'inscription
export type RegisterType = {
    last_name: string
    first_name: string
    email: string
    password: string
    image?: File
}

// Le type des données d'inscription de retour
export type RegisterResponseType = {
    user : UserType
    message: string
}