// import { DropResult } from "react-beautiful-dnd";
// import { KanbanListType } from "@/typeScript/Kanban";

// export const onDragEnd = (
//     result: DropResult,
//     lists: KanbanListType[],
//     setLists: (lists: KanbanListType[]) => void
// ) => {
//     const { source, destination } = result;

//     // Si aucune destination n'est définie, annuler l'opération
//     if (!destination) return;

//     // Trouver les index des listes source et destination
//     const sourceListIndex = lists.findIndex(list => list.id === source.droppableId);
//     const destListIndex = lists.findIndex(list => list.id === destination.droppableId);

//     // Récupérer les listes source et destination
//     const sourceList = lists[sourceListIndex];
//     const destList = lists[destListIndex];

//     // Si l'une des listes n'est pas trouvée, afficher une erreur et quitter
//     if (!sourceList || !destList) {
//         console.error('Source list or destination list not found');
//         return;
//     }

//     // Créer une copie des cartes de la liste source
//     const sourceItems = [...sourceList.cards];
//     const destItems = [...destList.cards];

//     // Extraire l'élément déplacé de la liste source
//     const [movedItem] = sourceItems.splice(source.index, 1);

//     if (source.droppableId !== destination.droppableId) {
//         // Si l'élément est déplacé dans une autre liste, l'ajouter à la liste destination
//         destItems.splice(destination.index, 0, movedItem);
//         const updatedLists = lists.map((list, index) => {
//             if (index === sourceListIndex) {
//                 return { ...list, cards: sourceItems };
//             } else if (index === destListIndex) {
//                 return { ...list, cards: destItems };
//             } else {
//                 return list;
//             }
//         });
//         setLists(updatedLists);
//     } else {
//         // Si l'élément reste dans la même liste, réorganiser les cartes dans la liste
//         sourceItems.splice(destination.index, 0, movedItem);
//         const updatedLists = lists.map((list, index) =>
//             index === sourceListIndex ? { ...list, cards: sourceItems } : list
//         );
//         setLists(updatedLists);
//     }
// };
