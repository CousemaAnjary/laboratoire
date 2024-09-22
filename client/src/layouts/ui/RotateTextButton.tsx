
// Type d'un composant bouton qui fait tourner son texte à chaque hover
type RotateTextButtonProps = {
    text: string
    onClick?: () => void
    className?: string
    size?: "default" | "sm" | "lg" | "icon";
}

// Définit les classes pour chaque taille
const sizeClasses = {
    default: "px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
}

export default function RotateTextButton({ text, size = "default", onClick, className = '' }: RotateTextButtonProps) {
    /**
     * ! STATE (état, données) de l'application
     */
    // Découper le texte en tableau de caractères
    const chars = text.split('')

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
                className={`group relative overflow-hidden border rounded-md text-sm font-medium ${sizeClasses[size]} ${className}`}
            >
                <span className="relative inline-flex">
                    {chars.map((char, index) => (
                        <span
                            key={index}
                            className={`duration-700 [transition-delay:${index * 0.02}s] group-hover:[transform:rotateY(360deg)]`}
                        >
                            {char === ' ' ? '\u00A0' : char} {/* Gérer l'espace comme un espace insécable */}
                        </span>
                    ))}
                </span>
            </button>
        </>
    )
}