
// Le type des données pour l'inscription (register)
export type RegisterType = {
    last_name: string
    first_name: string
    email: string
    password: string
    image?: File
}

// Le type des données pour la connexion (login)
export type LoginType = {
    email: string
    password: string
}

// Le type de la réponse API pour la connexion
export type LoginResponseType = {
    token: string
    user: {
        id: string
        first_name: string
        last_name: string
        email: string
        image?: string
    }
}

// Le type de la réponse API pour l'inscription (register)
export type RegisterResponseType = {
    user: {
        id: string
        first_name: string
        last_name: string
        email: string
        image?: string // URL de l'image du profil, si disponible
    };
};
