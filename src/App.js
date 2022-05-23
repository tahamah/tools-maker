import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { publicRoute } from './routes/publicRoute'
import { privateRoutes } from './routes/privateRoutes'
import Navbar from './components/Navbar'
import AdminRoute from './authentication/AdminRoute'
import AddAdmin from './pages/Dashboard/AddAdmin '
import AddService from './pages/Dashboard/AddService '
import Dashboard from './pages/Dashboard/Dashboard '
import RequireAuth from './pages/Login/RequireAuth'

function App() {
    return (
        <Navbar>
            <Routes>
                {publicRoute.map(({ path, Component }, index) => (
                    <Route key={index} path={path} element={<Component />} />
                ))}
                <Route element={<RequireAuth />}>
                    {privateRoutes.map(({ path, Component }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={<Component />}
                        />
                    ))}
                </Route>
                <Route element={<AdminRoute />}>
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="add-admin" element={<AddAdmin />} />
                        <Route path="add-service" element={<AddService />} />
                    </Route>
                </Route>
            </Routes>
            <ToastContainer />
        </Navbar>
    )
}

export default App
