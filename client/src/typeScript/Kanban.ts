
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
    name: string
    position: number
}

// Le type pour les données de la carte Kanban
export type kanbanCardType = {
    name: string
    description?: string
    due_date?: Date
    position: number
    list_id: string
}

