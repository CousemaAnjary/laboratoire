type BounceButtonProps = {
    text: string
    onClick?: () => void
    className?: string
    size?: "default" | "sm" | "lg" | "icon";
}

const sizeClasses = {
    default: "px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
}


export default function BounceButton({ text, size = "default", onClick, className = '' }: BounceButtonProps) {
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
                className={`relative bg-primary text-primary-foreground overflow-hidden border rounded-md text-sm font-medium  transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110 ${sizeClasses[size]} ${className}`}
            >
                {text}
            </button>
        </>
    )
}