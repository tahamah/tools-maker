import About from '../pages/About'
import Services from '../pages/Services'
import MyOrder from '../pages/Dashboard/MyOrders'
import AddReview from '../pages/Dashboard/AddReview'
import Dashboard from '../pages/Dashboard/Dashboard '
import Purchase from '../pages/Purchase'

export const privateRoutes = [
    { path: '/about', name: 'About', Component: About },
    { path: '/services', name: 'Services', Component: Services },
    { path: '/myOrder', name: 'My Order', Component: MyOrder },
    { path: '/addReview', name: 'Add Review', Component: AddReview },
    { path: '/dashboard', name: 'Dashboard', Component: Dashboard },
    { path: '/purchase/:product_id', name: 'Purchase', Component: Purchase },
]
