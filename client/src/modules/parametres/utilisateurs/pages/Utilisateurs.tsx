import corner from "@/assets/images/corner-4.png";
import Layout from "@/components/admin-panel/components/Layout";
import { filterableColumns, utilisateurData, utilisateurKeys } from "../utils/data";
import { DataTable } from "@/components/data-table/components/DataTable";
import { GenerateColumns } from "@/components/data-table/components/GenerateColumns";

export default function Utilisateurs() {
    /**
     * ! STATE (état, données) de l'application
     */
    const Columns = GenerateColumns(utilisateurKeys);

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Layout>
            <div
                className="flex justify-between items-center mb-8 bg-white p-4 shadow rounded-md"
                style={{
                    backgroundImage: `url(${corner})`,
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "130px",
                }}
            >
                <h1 className="font-medium text-gray-800">Gestion des utilisateurs</h1>
            </div>

            <div className="bg-white">
                <DataTable
                        columns={Columns}
                        data={utilisateurData}
                        filterableColumns={filterableColumns}
                    /> 
            </div>
        </Layout>
    );
}


