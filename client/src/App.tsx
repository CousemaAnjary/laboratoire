import { Route, Routes } from "react-router-dom"
import Login from "./modules/auth/pages/Login"
import Register from "./modules/auth/pages/Register"

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
      <Routes>
        {/* Public Routes */}
        <Route path="/" element="Hello World" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
      </Routes>
    </>
  )
}