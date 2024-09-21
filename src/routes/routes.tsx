
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Products from "../pages/Products/Products"
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import Home from "../pages/Home/Home/Home"
import Login from "../pages/Login"
import ProtectedRoute from "../components/layout/ProtectedRoute"
import Register from "../pages/Register"
import Product from "../pages/Product/Product"
import { routeGenerator } from "../utils/routeGenerator"
import { adminPaths } from "./admin.routes"
import Dashboard from "../pages/Dashboard/Dashboard"
import { userPaths } from "./user.routes"
import Checkout from "../pages/User/CheckOut/CheckOut"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/product/:productId",
                element: <Product />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
        ]
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute role="admin">
                <Dashboard />
            </ProtectedRoute>
        ),
        children: routeGenerator(adminPaths)
    },
    {
        path: "/user",
        element: (
            <ProtectedRoute role="user">
                <Dashboard />
            </ProtectedRoute>
        ),
        children: routeGenerator(userPaths)
    },

])


export default router