import api from "./config/apiConfig"


// Récupérer les colonnes du tableau Kanban
export const getColumns = async () => {
    try {
        // Appel à l'API pour récupérer les colonnes du tableau Kanban
        const response = await api.get('/kanban/columns')
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de la récupération des colonnes:', error)
    }
}