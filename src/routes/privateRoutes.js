import MyOrder from '../pages/Dashboard/MyOrders'
import AddReview from '../pages/Dashboard/AddReview'
import Dashboard from '../pages/Dashboard/Dashboard '
import Purchase from '../pages/Purchase'
import AddProduct from '../pages/Dashboard/AddProduct'
import Payment from '../pages/Dashboard/Payment'
import ManageOrder from '../pages/Dashboard/ManageOrder'
import AllUsers from '../pages/Dashboard/AllUsers'
import ManageAllProducts from '../pages/Dashboard/ManageAllProducts'

export const privateRoutes = [
    { path: '/myOrder', name: 'My Order', Component: MyOrder },
    { path: '/addProduct', name: 'Add Product', Component: AddProduct },
    { path: '/addReview', name: 'Add Review', Component: AddReview },
    { path: '/dashboard', name: 'Dashboard', Component: Dashboard },
    { path: '/allOrders', name: 'All Orders', Component: ManageOrder },
    {
        path: '/manageAllProducts',
        name: 'Manage All Products',
        Component: ManageAllProducts,
    },
    { path: '/allUsers', name: 'All Users', Component: AllUsers },
    { path: '/payment/:id', name: 'Payment', Component: Payment },
    { path: '/purchase/:product_id', name: 'Purchase', Component: Purchase },
]
