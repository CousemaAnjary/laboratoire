import { DropResult } from "react-beautiful-dnd";
import { KanbanListType } from "@/typeScript/Kanban";

export const onDragEnd = (result: DropResult, lists: KanbanListType[], setLists: (lists: KanbanListType[]) => void) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceListIndex = lists.findIndex(list => list.id === source.droppableId);
    const destListIndex = lists.findIndex(list => list.id === destination.droppableId);

    const sourceList = lists[sourceListIndex];
    const destList = lists[destListIndex];

    const sourceItems = [...sourceList.cards];
    const destItems = [...destList.cards];

    const [movedItem] = sourceItems.splice(source.index, 1);

    if (source.droppableId !== destination.droppableId) {
        destItems.splice(destination.index, 0, movedItem);
        const updatedLists = lists.map((list, index) => {
            if (index === sourceListIndex) {
                return { ...list, cards: sourceItems };
            } else if (index === destListIndex) {
                return { ...list, cards: destItems };
            } else {
                return list
            }
        });
        setLists(updatedLists);
    } else {
        sourceItems.splice(destination.index, 0, movedItem);
        const updatedLists = lists.map((list, index) =>
            index === sourceListIndex ? { ...list, cards: sourceItems } : list
        );
        setLists(updatedLists);
    }
};
