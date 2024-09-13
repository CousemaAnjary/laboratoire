import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import { AuthProvider } from "./contexts/AuthContext"
import { ThemeProvider } from "./contexts/ThemeContext"
// import KanbanBoard from "./pages/application/KanbanBoard"
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
                <ThemeProvider>
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
                            {/* <Route path="/kanbanBoard" element={<KanbanBoard />} /> */}
                        </Route>

                    </Routes>
                </ThemeProvider>
            </AuthProvider>
        </>
    )
}