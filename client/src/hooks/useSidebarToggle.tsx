import { useState } from "react"

interface UseSidebarToggleReturn {
    isOpen: boolean
    toggleSidebar: () => void
}

export default function useSidebarToggle(): UseSidebarToggleReturn {
    /**
     * ! STATE (état, données) de l'application
     */
    const [isOpen, setIsOpen] = useState<boolean>(true)


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    // Fonction pour ouvrir/fermer la barre latérale
    const toggleSidebar = () => {
        setIsOpen((prev) => !prev)
    }

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return {
        isOpen,
        toggleSidebar,
    }
}