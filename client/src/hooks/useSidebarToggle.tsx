import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface useSidebarToggleStore {
    isOpen: boolean;
    setIsOpen: () => void;
}

export const useSidebarToggle = create(
    persist<useSidebarToggleStore>(
        (set, get) => ({
            isOpen: true,
            setIsOpen: () => {
                set({ isOpen: !get().isOpen });
            }
        }),
        {
            name: 'sidebarOpen', // Nom de l'état stocké dans le localStorage
            storage: createJSONStorage(() => localStorage) // Utilisation du localStorage pour persister l'état
        }
    )
);
