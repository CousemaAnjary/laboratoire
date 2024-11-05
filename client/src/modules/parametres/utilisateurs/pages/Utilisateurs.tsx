import Layout from "@/components/adminPanel/components/Layout";
import corner from "@/assets/images/corner-4.png";

export default function Utilisateurs() {
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
                <div
                    className="flex justify-between items-center mb-8 bg-white p-4 shadow rounded"
                    style={{
                        backgroundImage: `url(${corner})`,
                        backgroundPosition: "bottom right",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "130px"
                    }}
                >
                    <h1 className="font-medium text-gray-800">Gestion des utilisateurs</h1>
                </div>

            </Layout>
        </>
    )
}