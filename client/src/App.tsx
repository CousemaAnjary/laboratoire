import Login from "./modules/auth/pages/Login"
import PublicRoutes from "./routes/PublicRoutes"
import { Route, Routes } from "react-router-dom"
import PrivateRoutes from "./routes/PrivateRoutes"
import Register from "./modules/auth/pages/Register"
import { AuthProvider } from "./core/contexts/AuthContext"
import Dashboard from "./modules/adminPanel/pages/Dashboard"



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
           <Route path="/dashboard" element={<Dashboard />} /> 
            {/* <Route path="/kanbanBoard" element={<KanbanBoard />} /> */}
          </Route>
        </Routes>
      </AuthProvider>

    </>
  )
}