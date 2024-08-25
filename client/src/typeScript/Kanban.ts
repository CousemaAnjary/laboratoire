
// Le type pour les données de la card Kanban
export type kanbanCardProps = {
    index: number
    card: {
        id: string
        name: string
    }
}

// Le type pour les données de la liste Kanban
export type KanbanListProps = {
    list: {
        id: string
        name: string
    }
}

// Le type pour les données de la liste Kanban
export type kanbanListType = {
    id: string
    name: string
    position: number
}

// Le type pour les données de la carte Kanban
export type kanbanCardType = {
    id : string
    name: string
    description?: string
    due_date?: Date
    position: number
    list_id: string
}

// Le type pour les données de la carte Kanban pour le retour 
export type kanbanCardResponse = {
    message: string
    kanbanCard: kanbanCardType
}

