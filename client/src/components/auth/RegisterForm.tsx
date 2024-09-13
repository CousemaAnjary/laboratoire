import { register } from "@/services/authService"
import { RegisterType } from "@/typeScript/Auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"


// Définir le schéma de validation avec Zod
const formSchema = z.object({
    last_name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
    first_name: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
    email: z.string().email({ message: "Adresse e-mail invalide" }),
    password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
    image: z.instanceof(File).optional()
})

export default function RegisterForm() {
    /**
     * ! STATE (état, données) de l'application
     */
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<RegisterType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            last_name: "",
            first_name: "",
            email: "",
            password: "",
            image: undefined
        },
    })

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleRegister = async (data: RegisterType): Promise<void> => {
        try {
            // Appel à la fonction d'inscription de l'utilisateur
            await register(data)
            navigate('/login')

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
            < div className="p-8 max-w-lg w-full">
                <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4 ">Créer un compte</h1>
                <p className="mb-4 text-sm text-muted-foreground">
                    Vous avez déjà un compte ? Accédez-y en cliquant <Link to="/login" className="underline text-cyan-700">ici</Link>
                </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleRegister)}>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">

                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nom</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="ABDILLAH" className="shadow-sm" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Prénom</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Cousema Anjary" className="shadow-sm" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="exemple@gmail.com" className="shadow-sm" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-10 gap-2">
                                <div className="col-span-9">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Mot de passe</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type={showPassword ? "text" : "password"} placeholder="Entrez votre mot de passe" className="shadow-sm" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>


                                <div className="gap-2">
                                    <Button type="button" variant="outline" className="mt-8 p-2 shadow-sm" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div className="col-span-9">
                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Image</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="file"
                                                        className="shadow-sm"
                                                        onChange={(e) => { field.onChange(e.target.files ? e.target.files[0] : undefined) }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <Button type="submit" className="w-full bg-cyan-700">S'inscrire</Button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t"></span>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                >
                                    <FcGoogle size={18} className="mr-1" />
                                    Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div >
        </>
    )
}