import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AllProducts from "../pages/Admin/AllProducts/AllProducts";
import UpdateProduct from "../pages/Admin/UpdateProduct/UpdateProduct";
import MyCart from "../pages/User/MyCart/MyCart";

export const adminPaths: any = [
    {
        name: "Dashboard",
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: "Add Product",
        path: 'addProduct',
        element: <AddProduct />
    },
    {
        name: "All Product",
        path: 'allProduct',
        element: <AllProducts />
    },
    {
        path: 'updateProduct/:productId',
        element: <UpdateProduct />
    },
    {
        name: "Cart",
        path: 'cart',
        element: <MyCart />
    },
]