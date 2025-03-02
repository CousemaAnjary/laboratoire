import { z } from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Eye, EyeOff, Loader } from "lucide-react"
import { Input } from "@/components/ui/input"
import { register } from "../registerService"
import { RegisterType } from "../registerType"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"


// Définir le schéma de validation avec Zod
const formSchema = z.object({
    last_name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
    first_name: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
    email: z.string().email({ message: "Adresse e-mail invalide" }),
    password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
    image: z.instanceof(File).optional()
})


export default function RegisterForm() {
    /**
     * ! STATE (état, données) de l'application
     */
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
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

        // Affichage du loader pendant le chargement
        setLoading(true)

        try {
            // Envoi des données du formulaire à l'API
            const response = await register(data)

            if (response) {
                //  Enregistrement du message de succès dans le stockage local
                localStorage.setItem("success", response.messageSuccess)
                navigate('/login')
            }

        } catch (error) {
            console.error(error)

        } finally {
            // Désactivation du loader après le chargement
            setLoading(false)
        }

    }
                

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>

            <div className="relative p-8 w-full max-w-md">
                <h1 className="mb-2 text-2xl font-medium font-inter text-black">Inscription</h1>
                <p className="mb-4 text-sm text-muted-foreground">
                    Vous avez déjà un compte ? Accédez-y en cliquant <Link to="/login" className="underline text-cyan-700">ici</Link>
                </p>

                <Form {...form} >
                    <form onSubmit={form.handleSubmit(handleRegister)}>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-inter">Nom</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="ABDILLAH" className="shadow-sm bg-white font-inter" />
                                                </FormControl>
                                                <FormMessage className="font-inter" />
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
                                                <FormLabel className="font-inter">Prénom</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Cousema Anjary" className="shadow-sm bg-white font-inter" />
                                                </FormControl>
                                                <FormMessage className="font-inter" />
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
                                            <FormLabel className="font-inter">Adresse email</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="exemple@gmail.com" className="shadow-sm bg-white font-inter" />
                                            </FormControl>
                                            <FormMessage className="font-inter" />
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
                                                <FormLabel className="font-inter">Mot de passe</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type={showPassword ? "text" : "password"} placeholder="Entrez votre mot de passe" className="shadow-sm bg-white font-inter" />
                                                </FormControl>
                                                <FormMessage className="font-inter" />
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
                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter">Image</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    className="shadow-sm bg-white font-inter text-xs"
                                                    onChange={(e) => { field.onChange(e.target.files ? e.target.files[0] : undefined) }}
                                                />
                                            </FormControl>
                                            <FormMessage className="font-inter" />
                                        </FormItem>
                                    )}
                                />

                            </div>

                            <div className="grid">
                                <Button type="submit" className="w-full font-inter" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <Loader className="mr-2 h-4 w-4 animate-spin" />
                                            Veuillez patienter
                                        </>
                                    ) : (
                                        "Créer un compte"
                                    )}

                                </Button>

                            </div>
                            <div className="relative">
                                {/* <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t"></span>
                            </div> */}
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 font-inter text-muted-foreground">Ou continuer avec</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="grid gap-2">
                                    <Button type="button" variant="outline" className="w-full font-inter">
                                        <FcGoogle size={18} /> Google
                                    </Button>
                                </div>
                                <div className="grid gap-2">
                                    <Button type="button" variant="outline" className="w-full font-inter">
                                        <FaGithub size={18} /> Github
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}