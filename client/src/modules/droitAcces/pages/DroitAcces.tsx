import Layout from "@/components/adminPanel/components/Layout";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export default function DroitAcces() {
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
            <Layout>
                <div className="flex justify-between mb-4">
                    <h1 className="text-2xl">Gestion des droits utilisateurs</h1>

                    <div className="flex">
                        <Button className="bg-blue-900 hover:bg-blue-800">
                            < Save strokeWidth={3} />Enregistrer
                        </Button>
                    </div>
                </div>
            </Layout>
        </>
    )
}