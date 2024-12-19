import UserAvatar from "@/components/UserAvatar"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/core/contexts/AuthContext"
import { LogOut, Settings, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



export default function UserDropdownMenu() {
    /**
     * ! STATE (état, données) de l'application
     */
    const navigate = useNavigate()
    const { user, logout } = useAuth()


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleLogout = async (): Promise<void> => {

        try {
            await logout()
            // Déconnexion réussie, rediriger vers la page de connexion
            navigate('/login')

        } catch (error) {
            // Afficher l'erreur dans la console
            console.error('Logout failed', error)
        }
    }


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="relative h-8 w-8 rounded-full"
                    >
                        <UserAvatar image={user?.image} email={user?.email} />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-inter font-medium leading-none mb-1"> {user?.last_name} {user?.first_name}</p>
                            <p className="text-xs font-inter leading-none text-muted-foreground">
                                {user?.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="hover:cursor-pointer" asChild>
                            <Link to="#" className="flex items-center font-inter">
                                <User className="w-4 h-4 mr-3 text-muted-foreground" />
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:cursor-pointer" asChild>
                            <Link to="#" className="flex items-center font-inter">
                                <Settings className="w-4 h-4 mr-3 text-muted-foreground" />
                                Paramètres
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:cursor-pointer font-inter" onClick={handleLogout}>
                        <LogOut className="w-4 h-4 mr-3 text-muted-foreground text-red-700" />
                        Déconnexion
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}