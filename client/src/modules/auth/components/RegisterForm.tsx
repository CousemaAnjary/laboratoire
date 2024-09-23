import { Button } from "@/core/components/ui/button";
import { Link } from "react-router-dom";

export default function RegisterForm() {
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
            <div className="p-8 border bg-white">
                <h1 className="text-3xl font-semibold mb-4 ">Créer un compte</h1>
                <p className="mb-4 text-sm text-muted-foreground">
                    Vous avez déjà un compte ? Accédez-y en cliquant <Link to="/login" className="underline text-cyan-700">ici</Link>
                </p>

                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm">Adresse email</label>
                        <input type="email" id="email" name="email" className="input" placeholder="Votre adresse email" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm">Mot de passe</label>
                        <input type="password" id="password" name="password" className="input" placeholder="Votre mot de passe" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirmPassword" className="text-sm">Confirmer le mot de passe</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="input" placeholder="Confirmer votre mot de passe" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Button type="submit" className="btn btn-primary">Créer un compte</Button>
                    </div>
                </form>
            </div>
        </>
    )
}