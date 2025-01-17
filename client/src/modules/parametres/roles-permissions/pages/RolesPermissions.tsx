import corner from "@/assets/images/corner-4.png"
import Layout from "@/components/admin-panel/components/Layout"
import { DataTable } from "@/components/data-table/components/DataTable"
import { generateFilterableColumns } from "@/utils/generateFilterableColumns"
import { useRoles } from "../hooks/useRoles"
import { Roles } from "../typeScript/rolesPermissionsType"
import { columns } from "../utils/columns"
import { dataRole } from "../utils/data"



export default function RolesPermissions() {
    /**
     * ! STATE (état, données) de l'application
     */
    const roles = useRoles(); // Récupération des rôles via le hook
    const data = dataRole(roles); // Transformation des données

    const filterableKeys: Array<keyof Roles> = ["name"]; // Définir les clés filtrables
    const filterableColumns = generateFilterableColumns(data, filterableKeys); // Générer les colonnes filtrables

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
                    data={data}
                    filterableColumns={filterableColumns}
                />
            </div>
        </Layout>
    )
}


