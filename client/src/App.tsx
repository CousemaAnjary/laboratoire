import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import PublicRoute from "./components/routes/PublicRoute"
import PrivateRoute from "./components/routes/PrivateRoute"



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
                    <Route element={<PublicRoute />}>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    {/* Protected Routes */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>

                </Routes>
            </AuthProvider>
        </>
    )
}