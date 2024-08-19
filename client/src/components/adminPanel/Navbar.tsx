import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import ModeToggle from "./ModeToggle"
import UserDropdownMenu from "./UserDropdownMenu"
import { SheetMenu } from "./SheetMenu"

export default function Navbar(): JSX.Element {
    return (
        <div className="sticky top-0 z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
            <div className="mx-4 sm:mx-8 flex h-14 items-center">
                <div className="flex items-center space-x-4 lg:space-x-0">
                    <SheetMenu /> 
                    <Link to="/dashboard">
                        <Button variant="ghost">Dashboard</Button>
                    </Link>
                </div>
                <div className="flex flex-1 items-center space-x-2 justify-end">
                    <ModeToggle />
                    <UserDropdownMenu />
                </div>
            </div>
        </div>
    )
}
