import { useRoutes, BrowserRouter } from 'react-router'

import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import NotFound from '../NotFound/index'
import SignIn from '../SignIn/index'
import Navbar from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context/index'


function App() {

  const AppRoutes = () => {
    const routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/clothes', element: <Home /> },
      { path: '/furniture', element: <Home /> },
      { path: '/electronics', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-order', element: <MyOrder /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/my-orders/last', element: <MyOrder /> },
      { path: '/my-orders/:id', element: <MyOrder /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '*', element: <NotFound /> },
    ])

    return routes
  }

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
