import { columns } from "../utils/columns"
import corner from "@/assets/images/corner-4.png"
import { filterableColumns, profilData} from "../utils/data"
import Layout from "@/components/admin-panel/components/Layout"
import { DataTable } from "@/components/data-table/components/DataTable"


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
                <h1 className="font-medium font-inter text-gray-800">Gestion des Rôles et Permissions</h1>
            </div>

            <div className="bg-white p-6 shadow rounded-md">
                <DataTable
                    columns={columns}
                    data={profilData}
                    filterableColumns={filterableColumns}
                />
            </div>
        </Layout>
    )
}


