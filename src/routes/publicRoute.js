import Blogs from '../pages/Blogs'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/Login/SignUp'
import Portfolio from '../pages/Portfolio'

export const publicRoute = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/signUp', name: 'Login', Component: SignUp },
    { path: '/blogs', name: 'Blogs', Component: Blogs },
    { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
]
