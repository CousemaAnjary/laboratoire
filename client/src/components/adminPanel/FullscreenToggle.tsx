import { useState } from "react"
import { Button } from "../ui/button"
import { Maximize, Minimize } from "lucide-react"


export default function FullscreenToggle(): JSX.Element {
    /**
     * ! STATE (état, données) de l'application
     */
    const [isFullscreen, setIsFullscreen] = useState(false)


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const toggleFullscreen = () => {
        if (!isFullscreen) {
            // Passer en plein écran
            document.documentElement.requestFullscreen()
        } else {
            // Quitter le mode plein écran
            document.exitFullscreen()
        }
        setIsFullscreen(!isFullscreen)
    }


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Button
            variant="ghost"
            size={"icon"}
            onClick={toggleFullscreen} >
            {isFullscreen ? <Minimize /> : <Maximize />}
        </Button>
    )
}
