import { Button } from "../ui/button"
import { useTheme } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"


export default function ModeToggle() {
    /**
     * ! STATE (état, données) de l'application
     */
    const { toggleTheme } = useTheme()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <Button
                className="rounded-full w-8 h-8 bg-background"
                variant="outline"
                size="icon"
                onClick={toggleTheme}
            >
                <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
                <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
            </Button>
        </>
    )
}