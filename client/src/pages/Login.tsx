import LoginForm from "@/components/LoginForm"


export default function Login() {
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
            <div className="min-h-screen bg-slate-100">
                <div className="w-full">
                    {/* NavBar */}
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}