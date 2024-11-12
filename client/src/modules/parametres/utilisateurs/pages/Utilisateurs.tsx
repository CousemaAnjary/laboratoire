import { utilisateurData, utilisateurFields } from "../utils/data";
import { generateColumns } from "../utils/columns"; // Remplacez 'columns' par 'generateColumns'
import corner from "@/assets/images/corner-4.png";
import Layout from "@/components/admin-panel/components/Layout";
import { DataTable } from "@/components/data-table/components/DataTable";
import { Utilisateur } from "../utils/data";

// Déclarer les colonnes en dehors du composant
const columns = generateColumns<Utilisateur>(utilisateurFields);

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
                className="flex justify-between items-center mb-8 bg-white p-4 shadow rounded"
                style={{
                    backgroundImage: `url(${corner})`,
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "130px",
                }}
            >
                <h1 className="font-medium text-gray-800">Gestion des utilisateurs</h1>
            </div>
            <div className="bg-white p-6 shadow rounded">
                {/* Passer les colonnes et les données au composant DataTable */}
                <DataTable<Utilisateur, unknown> columns={columns} data={utilisateurData} />
            </div>
        </Layout>
    );
}
