/* eslint-disable react-refresh/only-export-components */
import { ThemeContextType } from "@/typeScript/Autre"
import { createContext, useState, useContext, useEffect } from "react"


/**
 * ! Création du contexte (valeurs par défaut)
 */
const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { },
})

/**
 * ! Installation du contexte (Provider)
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    /**
     * ! STATE (état, données) de l'application
     */
    const [theme, setTheme] = useState(() => {
        // Récupérer le thème stocké dans le local storage
        const localTheme = localStorage.getItem("theme")
        return (localTheme) || "light"
    })


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */

    useEffect(() => {
        // Mettre à jour la balise HTML
        document.documentElement.className = theme

    }, [theme])


    // Fonction pour basculer entre les thèmes
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        // Stocker le thème dans le local storage
        localStorage.setItem("theme", newTheme)
    }


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

/**
 * ! Consommation du contexte (hook personnalisé)
 */
export const useTheme = () => useContext(ThemeContext)

