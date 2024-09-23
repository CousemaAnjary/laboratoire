import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";
import { Label } from "@/core/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterForm() {
    /**
     * ! STATE (état, données) de l'application
     */
    const [showPassword, setShowPassword] = useState(false)

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

                <form>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid gap-2">
                                <Label htmlFor="firstName" className="text-sm">Prénom</Label>
                                <Input type="text" id="firstName" name="firstName" placeholder="Votre prénom" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="lastName" className="text-sm">Nom</Label>
                                <Input type="text" id="lastName" name="lastName" placeholder="Votre nom" />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-sm">Adresse email</Label>
                            <Input type="email" id="email" name="email" placeholder="Votre adresse email" />
                        </div>

                        <div className="grid grid-cols-8 gap-2">
                            <div className="grid gap-2 col-span-7">
                                <Label htmlFor="password" className="text-sm">Mot de passe</Label>
                                <Input type="password" id="password" name="password" placeholder="Votre mot de passe" />
                            </div>
                            <div className="grid mb-1">
                                <Button type="button" variant="outline" size={"icon"} className="mt-8" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </Button>
                            </div>
                        </div>


                        <div className="flex flex-col gap-2">
                            <Button type="submit" className="btn btn-primary">Créer un compte</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}