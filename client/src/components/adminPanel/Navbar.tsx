import UserDropdownMenu from "./UserDropdownMenu"


export default function Navbar(): JSX.Element {
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
            <div className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
                <div className="mx-4 sm:mx-8 flex h-14 items-center">
                    <div className="flex items-center space-x-4 lg:space-x-0">
                        {/* <SheetMenu /> */}
                        <h1 className="text-base font-medium leading-none">Dashboard</h1>
                    </div>
                    <div className="flex flex-1 items-center space-x-2 justify-end">
                        {/* <ModeToggle /> */}
                        <UserDropdownMenu />
                    </div>
                </div>
            </div>
        </>
    )
}