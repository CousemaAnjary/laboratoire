import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"
import { LoginType } from "../typeScript/AuthTypes"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/core/components/ui/form"
import { Input } from "@/core/components/ui/input"
import { Button } from "@/core/components/ui/button"


// Définir le schéma de validation avec Zod
const formSchema = z.object({
    email: z.string().email({ message: "Adresse e-mail invalide" }),
    password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
})

export default function LoginForm() {
    /**
     * ! STATE (état, données) de l'application
     */

    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<LoginType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */

    const handleLogin = async (data: LoginType): Promise<void> => {
        try {
            console.log(data)

        } catch (error) {
            // Afficher l'erreur dans la console
            console.error(error)
        }
    }
    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div className="relative p-8 w-full max-w-md">
                <h1 className="mb-4 text-2xl font-bold text-black">Se connecter</h1>
                <p className="mb-4 text-md text-muted-foreground text-black">
                    Faites partie de la communauté , où vous pourrez rencontrer et discuter avec de nouveaux amis et partager des intérêts communs !
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                    Vous n'avez pas de compte ? Inscrivez-vous en cliquant <Link to="/register" className="underline text-cyan-700">ici</Link>
                </p>

                <Form {...form} >
                    <form onSubmit={form.handleSubmit(handleLogin)}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Adresse email</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="exemple@gmail.com" className="shadow-sm bg-white" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-9 gap-2">
                                <div className="grid gap-2 col-span-8">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Mot de passe</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type={showPassword ? "text" : "password"} placeholder="Entrez votre mot de passe" className="shadow-sm bg-white" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid mb-1">
                                    <Button type="button" variant="outline" size={"icon"} className="mt-8" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                    </Button>
                                </div>
                            </div>

                            <div className="grid">
                                <Button type="submit" className="w-full">Se connecter</Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}