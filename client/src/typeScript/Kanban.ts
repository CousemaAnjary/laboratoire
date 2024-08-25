// Le type pour les données d'une carte Kanban
export type KanbanCardType = {
    id: string
    name: string
    description?: string
    due_date?: Date
    position: number
    list_id: string
}

// Le type pour les propriétés de la carte Kanban
export type KanbanCardProps = {
    index: number
    card: KanbanCardType
}

// Le type pour les données d'une liste Kanban
export type KanbanListType = {
    id: string
    name: string
    position: number
}

// Le type pour les propriétés de la liste Kanban
export type KanbanListProps = {
    list: KanbanListType
}

// Le type pour la réponse de l'API lors de l'ajout d'une carte Kanban
export type KanbanCardResponse = {
    message: string
    kanbanCard: KanbanCardType
}

// Le type pour la réponse de l'API lors de l'ajout d'une liste Kanban
export type KanbanListResponse = {
    message: string
    kanbanList: KanbanListType
}
