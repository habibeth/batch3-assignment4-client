import { Button, Table } from "antd";
import { useDeleteProductMutation, useGetAllProductsQuery } from "../../../redux/feature/Admin/productManagement.api";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AllProducts = () => {
    const { data: getAllProducts, isLoading, isFetching } = useGetAllProductsQuery(undefined);
    const [deleteProduct] = useDeleteProductMutation();

    const productData = getAllProducts?.data?.map(({ _id, title, brand, availableQuantity, price, rating }: any) => ({
        key: _id,
        title: title || 'Unknown Product',
        brand: brand || 'Unknown Product',
        quantity: availableQuantity,
        price: price,
        rating,
    })) || [];


    const handleDeleteProduct = async (id: string) => {
        console.log(id)
        const toastId = toast.loading("Logging Progress!")
        const res = await deleteProduct(id);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }



    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return (
                    <Link to={`/admin/updateProduct/${item.key}`}>
                        <div className="">
                            <Button type="primary">Update</Button>
                        </div>
                    </Link>
                )
            }
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return <div className="">
                    <Button onClick={() => handleDeleteProduct(item.key)} type="primary" danger>Delete</Button>
                </div>
            }
        },
    ];



    if (isLoading) {
        return <p>Loading!!!</p>
    }

    return (
        <Table loading={isFetching} columns={columns} dataSource={productData} pagination={false} />
    );
};

export default AllProducts;