import Layout from "@/components/admin-panel/components/Layout";
import corner from "@/assets/images/corner-4.png";
import { DataTable } from "@/components/data-table/components/DataTable";
import { columns } from "@/components/data-table/utils/columns";
import { data } from "../utils/data";

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

                <div className="bg-white p-8 shadow rounded">
                    <DataTable columns={columns} data={data} />
                </div>
            </Layout>
        </>
    )
}