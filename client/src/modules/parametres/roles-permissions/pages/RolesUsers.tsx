import Layout from "@/components/admin-panel/components/Layout";


export default function RolesUsers() {
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
                    className="flex justify-between items-center mb-8 bg-white p-4 shadow rounded-md">
                    <h1 className="font-medium font-inter text-gray-800">Liste des utilisateurs associés au rôle</h1>
                </div>

                <div className="bg-white p-6 shadow rounded-md">
                    {/* <DataTable
                        columns={columns}
                        data={data}
                        filterableColumns={filterableColumns}
                    /> */}
                </div>
            </Layout>
        </>
    )
}