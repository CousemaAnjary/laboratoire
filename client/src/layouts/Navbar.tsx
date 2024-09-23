import { EllipsisVertical, User } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/core/components/ui/button"
import UnderlineHoverLink from "./ui/UnderlineHoverLink"
import { useState } from "react"

export default function Navbar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const logoText = "< Cousema Anjary />"
    const logoSmallText = "< C.A />"
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <nav className="container-fluid relative z-10 bg-white h-16 border-b flex justify-between items-center">
                <div className="logo ms-20 max-lg:ms-8">
                    <h1 className="font-medium font-mono max-lg:hidden">{logoText}</h1>
                    <h1 className="font-medium font-mono hidden max-lg:block">{logoSmallText}</h1>
                </div>

                {/* Desktop Navbar */}
                <div className="navbar max-lg:hidden">
                    <ul className="flex gap-10">
                        <li>
                            <Link to="/">
                                <UnderlineHoverLink text="Laboratoire" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <UnderlineHoverLink text="A propos de moi" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <UnderlineHoverLink text="Contact" />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Desktop Auth Buttons */}
                <div className="flex gap-3 me-20 max-lg:hidden">
                    <Link to="/register">
                        <Button variant={"ghost"}>Créer un compte</Button>
                    </Link>
                    <Link to="/login">
                        <Button variant={"outline"} className="shadow-none">
                            <User size={16} className="mr-1" /> Connexion
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden me-8">
                    <Button variant={"ghost"} size={"icon"} onClick={toggleMobileMenu}>
                        <EllipsisVertical size={18} />
                    </Button>
                </div>

                {/* Mobile Menu (toggle)
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-16 right-0 bg-white shadow-lg w-full flex flex-col items-center py-4">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link to="/" onClick={toggleMobileMenu}>
                                    <UnderlineHoverLink text="Laboratoire" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={toggleMobileMenu}>
                                    <UnderlineHoverLink text="A propos de moi" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={toggleMobileMenu}>
                                    <UnderlineHoverLink text="Contact" />
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-4 flex flex-col items-center gap-3">
                            <Link to="/register" onClick={toggleMobileMenu}>
                                <Button variant={"ghost"}>Créer un compte</Button>
                            </Link>
                            <Link to="/login" onClick={toggleMobileMenu}>
                                <Button variant={"outline"} className="shadow-none">
                                    <User size={16} className="mr-1" /> Connexion
                                </Button>
                            </Link>
                        </div>
                    </div>
                )} */}
            </nav>
        </>
    )
}
