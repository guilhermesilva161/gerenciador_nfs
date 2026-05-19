import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login/index";
import DashboardAdministrador from "../pages/dashboard/administrador/index";
import DashboardOperador from "../pages/dashboard/oper/index";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard/admin" element={<DashboardAdministrador />} />
                <Route path="/dashboard/operador" element={<DashboardOperador />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;