import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
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

            <div className="space-y-2 p-2">
                <Skeleton className="h-4 w-[240px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>

        </>
    )
}