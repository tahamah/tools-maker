import Home from '../pages/Home/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login/Login'
import SignUp from '../pages/Login/SignUp'

export const publicRoute = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/contact', name: 'Contact', Component: Contact },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/signUp', name: 'Login', Component: SignUp },
]
