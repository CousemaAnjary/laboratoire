
// Le type pour les données de la card Kanban
export type kanbanCardProps = {
    index: number
    content: string
}

// Le type pour les données de la liste Kanban
export type KanbanListProps = {
    list: {
        id: string
        name: string
    };
}

export type kanbanListType = {
    name: string
    position: number
}