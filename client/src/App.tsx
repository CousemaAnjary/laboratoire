import PublicRoutes from "./routes/PublicRoutes"
import { Route, Routes } from "react-router-dom"
import PrivateRoutes from "./routes/PrivateRoutes"
import { AuthProvider } from "./core/contexts/AuthContext"
import Login from "./modules/authentifications/login/pages/Login"
import Register from "./modules/authentifications/register/pages/Register"
import DroitAcces from "./modules/parametres/droit-acces/pages/DroitAcces"
import Utilisateurs from "./modules/parametres/roles-permissions/pages/Utilisateurs"
import KanbanBoard from "./modules/applications/kanban-board/pages/KanbanBoard"
import Administration from "./modules/tableaux-de-bord/administration/pages/Administration"
import DHkanbanBoard from "./modules/tableaux-de-bord/tableaux-de-bord/pages/DHkanbanBoard"



export default function App() {
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
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicRoutes />}>
            <Route path="/" element="Hello World" />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/kanbanBoard" element={<KanbanBoard />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/tableau-de-board/kanban" element={<DHkanbanBoard />} />
            <Route path="/droit-acces" element={<DroitAcces />} />
            <Route path="/roles-permissions" element={<Utilisateurs />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}