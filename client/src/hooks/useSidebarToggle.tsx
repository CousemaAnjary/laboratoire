import {  useState } from "react";

interface UseSidebarToggleReturn {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export default function useSidebarToggle(): UseSidebarToggleReturn {
    /**
     * ! STATE (état, données) de l'application
     */
    const [isOpen, setIsOpen] = useState<boolean>(() => {
        // Récupère l'état depuis le localStorage si disponible, sinon initialiser à `true`
        const savedState = localStorage.getItem('sidebarOpen');
        return savedState !== null ? JSON.parse(savedState) : true;
    })

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    
    const toggleSidebar = () => {
        setIsOpen((prev) => {
            const newState = !prev;
            localStorage.setItem('sidebarOpen', JSON.stringify(newState));
            return newState;
        })
    }

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return {
        isOpen,
        toggleSidebar,
    };
}
