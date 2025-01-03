import Layout from "@/components/admin-panel/components/Layout";
import { DataTable } from "@/components/data-table/components/DataTable";
import { columnsUsers } from "../utils/columnsUsers";
import { useRoleUsers } from "../hooks/useRoleUsers";
import { dataUsers } from "../utils/dataUsers";
import { generateFilterableColumns } from "@/utils/generateFilterableColumns";
import { Users } from "../typeScript/rolesPermissionsType";


export default function RolesUsers() {
    /**
     * ! STATE (état, données) de l'application
     */
    const rolesUsers = useRoleUsers(); // Récupération des utilisateurs associés au rôle via le hook
    const data = dataUsers(rolesUsers); // Transformation des données

    const filterableKeys: Array<keyof Users> = ["email"]; // Définir les clés filtrables
    const filterableColumns = generateFilterableColumns(data, filterableKeys); // Générer les colonnes filtrables

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
                    className="flex justify-between items-center mb-8 bg-white p-4 shadow rounded-md">
                    <h1 className="font-medium font-inter text-gray-800">Liste des utilisateurs associés au rôle</h1>
                </div>

                <div className="bg-white p-6 shadow rounded-md">
                    <DataTable
                        columns={columnsUsers}
                        data={data}
                        filterableColumns={filterableColumns}
                    />
                </div>
            </Layout>
        </>
    )
}