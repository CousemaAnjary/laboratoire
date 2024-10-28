import { useEffect, useState } from "react"

export default function useSidebarToggle() {
    /**
     * ! STATE (état, données) de l'application
     */
    const [isOpen, setIsOpen] = useState(() => {
        const savedState = localStorage.getItem("sidebarState");
        return savedState ? savedState === "open" : true;
    })

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    // Mettre à jour localStorage chaque fois que l'état de la barre latérale change
    useEffect(() => {
        localStorage.setItem("sidebarState", isOpen ? "open" : "closed");
    }, [isOpen])


    // Fonction pour basculer l'état de la barre latérale
    const toggleSidebar = () => setIsOpen(prev => !prev)
    /**
     * ! AFFICHAGE (render) de l'application
     */
    return { isOpen, setIsOpen, toggleSidebar }
}