import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { publicRoute } from './routes/publicRoute'
import { privateRoutes } from './routes/privateRoutes'
import Navbar from './components/Navbar'
import UserRoute from './authentication/UserRoute'
import Dashboard from './pages/Dashboard/Dashboard '
import Profile from './pages/Dashboard/Profile'
import AddReview from './pages/Dashboard/AddReview'
import MyOrders from './pages/Dashboard/MyOrders'
import PrivateRoute from './authentication/PrivateRoute'
import NotFound from './pages/Shared/NotFound'

function App() {
    return (
        <Navbar>
            <Routes>
                {publicRoute.map(({ path, Component }, index) => (
                    <Route key={index} path={path} element={<Component />} />
                ))}
                <Route element={<PrivateRoute />}>
                    {privateRoutes.map(({ path, Component }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={<Component />}
                        />
                    ))}
                </Route>
                <Route element={<UserRoute />}>
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="addReview" element={<AddReview />} />
                        <Route path="myOrders" element={<MyOrders />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
        </Navbar>
    )
}

export default App
