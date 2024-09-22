
type UnderlineHoverButtonProps = {
    text: string
    onClick?: () => void
    className?: string
    size?: "default" | "sm";
}

// Définit les classes pour chaque taille
const sizeClasses = {
    default: "py-1",
    sm: "h-8 rounded-md  text-xs",
}

export default function UnderlineHoverButton({ text, size = "default", onClick, className = "" }: UnderlineHoverButtonProps) {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <button
                onClick={onClick}
                role="link"
                className={`relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 ${sizeClasses[size]} ${className}`}
            >
                {text}
            </button>
        </>
    )
}