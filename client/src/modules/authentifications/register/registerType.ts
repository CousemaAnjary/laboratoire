import { UserType } from "../login/loginType"


// Le type des données pour l'inscription (register)
export type RegisterType = {
    last_name: string
    first_name: string
    email: string
    password: string
    image?: File
}

// Le type de la réponse API pour l'inscription (register)
export type RegisterResponseType = {
    user: UserType
    messageSuccess: string
}

