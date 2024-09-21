import MyCart from "../pages/User/MyCart/MyCart";
import UserDashboard from "../pages/User/UserDashboard";

export const userPaths = [
    {
        name: "Dashboard",
        path: 'dashboard',
        element: <UserDashboard />
    },
    {
        name: "Cart",
        path: 'cart',
        element: <MyCart />
    },
]