import { Avatar, AvatarFallback, AvatarImage } from "@/core/components/ui/avatar";


export default function UserAvatar({ image, email }: { image?: string, email?: string }) {
    /**
     * ! STATE (état, données) de l'application
     */
    // dicebear.com
    const placeholderImage = `https://api.dicebear.com/9.x/bottts/svg?seed=${email}`


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const avatarImage = image ? `${import.meta.env.VITE_BACKEND_STORAGE_URL}/${image}` : placeholderImage;


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <Avatar className="h-8 w-8">
                <AvatarImage src={avatarImage} alt="Avatar" />
                <AvatarFallback className="bg-transparent">JD</AvatarFallback>
            </Avatar>
        </>
    )
}