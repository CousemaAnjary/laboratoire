import { Route, Routes } from "react-router-dom"

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

        {/* Protected Routes */}
      </Routes>
    </>
  )
}