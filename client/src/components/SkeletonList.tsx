import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonList() {
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
            <div className="w-72">
                <div className="space-y-4">
                    <Skeleton className="h-10 w-full rounded-md" />
                    <Skeleton className="h-6 w-3/4 rounded-md" />
                    <Skeleton className="h-6 w-5/6 rounded-md" />
                    <Skeleton className="h-6 w-2/3 rounded-md" />
                    <Skeleton className="h-6 w-full rounded-md" />
                </div>
            </div>
        </>
    )
}