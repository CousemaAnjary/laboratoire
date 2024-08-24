import api from "./config/apiConfig"


// Récupérer les colonnes du tableau Kanban
export const kanbanLists = async () => {
    try {
        // Appel à l'API pour récupérer les colonnes du tableau Kanban
        const response = await api.get('/kanbanLists')
        return response.data.kanbanLists // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de la récupération des colonnes:', error)
    }
}

// Ajouter une colonne au tableau Kanban
export const addKanbanList = async (kanbanListData) => {
    try {
        // Appel à l'API pour ajouter une colonne au tableau Kanban
        const response = await api.post('/kanbanLists', kanbanListData)
        return response.data.kanbanList // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'ajout de la colonne:', error)
    }
}