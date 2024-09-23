import { useState } from "react"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/core/components/ui/input"
import { Label } from "@/core/components/ui/label"
import { Button } from "@/core/components/ui/button"


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
            <div className="relative p-8 w-full max-w-md ">
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

                        <div className="grid grid-cols-9 gap-2">
                            <div className="grid gap-2 col-span-8">
                                <Label htmlFor="password" className="text-sm">Mot de passe</Label>
                                <Input type="password" id="password" name="password" placeholder="Votre mot de passe" />
                            </div>
                            <div className="grid mb-1">
                                <Button type="button" variant="outline" size={"icon"} className="mt-8" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </Button>
                            </div>
                        </div>

                        <div className="grid">
                            <Button type="submit" className="btn btn-primary w-full">Créer un compte</Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Button type="button" variant="outline" className="w-full">
                                <FcGoogle size={18} className="mr-1" /> Google
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}