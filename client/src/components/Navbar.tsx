import { useState } from "react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md"
import { BadgeAlert, Contact, House, Settings, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "./ui/dropdown-menu"


export default function Navbar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="relative z-20 w-full p-4  bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
            <div className="container-fluid mx-auto">
                <div className="container mx-auto flex justify-between items-center ">

                    <div className="flex items-center gap-2">
                        {/* <img src={logo} alt="logo" className="w-24 h-auto object-contain" /> */}
                        <nav>
                            <ul className="hidden md:flex items-center gap-1">
                                <li>
                                    <Link to="/">
                                        <Button variant="ghost" className="flex items-center gap-1">
                                            <House size={18} className="mr-1" /> Accueil
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <a href="">
                                        <Button variant="ghost" className="flex items-center gap-1">
                                            <BadgeAlert size={18} className="mr-1" /> A propos
                                        </Button>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Button variant="ghost" className="flex items-center gap-1">
                                            <Contact size={18} className="mr-1" /> Contact
                                        </Button>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="p-2 shadow-sm">
                                    <Settings size={18} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="z-50">
                                <DropdownMenuLabel>Thème</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <MdLightMode className="mr-1" />
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <MdDarkMode className="mr-1" />
                                        Dark
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link to="/login">
                            <Button variant="ghost" className="flex items-center gap-1">
                                <User size={18} className="mr-1" /> Connexion
                            </Button>
                        </Link>
                        <Button
                            variant="ghost"
                            className="flex items-center md:hidden"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                        </Button>
                    </div>
                </div>
                
                {isMenuOpen && (
                    <div className="flex flex-col md:hidden mt-4">
                        <Link to="/" onClick={toggleMenu}>
                            <Button variant="ghost" className="flex items-center gap-1 w-full">
                                <House size={18} className="mr-1" /> Accueil
                            </Button>
                        </Link>
                        <a href="" onClick={toggleMenu}>
                            <Button variant="ghost" className="flex items-center gap-1 w-full">
                                <BadgeAlert size={18} className="mr-1" /> A propos
                            </Button>
                        </a>
                        <a href="" onClick={toggleMenu}>
                            <Button variant="ghost" className="flex items-center gap-1 w-full">
                                <Contact size={18} className="mr-1" /> Contact
                            </Button>
                        </a>
                    </div>
                )}
            </div>
            
        </div>
        
    )
}
