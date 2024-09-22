
export default function Navbar() {
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
            <nav className="container-fluid p-2 border-b flex justify-between items-center">
                <div className="logo ms-20">
                    <h1>LOGO</h1>
                </div>

                <div className="navbar me-20">
                    <ul className="flex gap-5">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/register">Inscription</a></li>
                        <li><a href="/login">Connexion</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}