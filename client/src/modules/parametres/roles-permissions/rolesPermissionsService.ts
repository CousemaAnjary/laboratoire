import api from "@/core/services/apiConfig"
import { handleApiError } from "@/utils/handleApiError"


export const getRoles = async () => {
    try {
        // Appel à l'API pour récupérer les rôles
        const response = await api.get('/roles')
        return response.data.roles

    } catch (error) {
        // Gérer les erreurs API (serveur) 
        handleApiError(error)
        throw error
    }
}

// get RolesUsers
export const getRolesUsers = async (roleId: number) => {
    try {
        // Appel à l'API pour récupérer les rôles
        const response = await api.get(`/roles/${roleId}/users`)
        return response.data.users
    } catch (error) {
        // Gérer les erreurs API (serveur) 
        handleApiError(error)
        throw error
    }
}