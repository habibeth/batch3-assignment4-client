import { Button, InputNumber, Table } from 'antd';
import { useDeleteCartMutation, useGetMyCartsQuery } from '../../../redux/feature/User/CartManagement.api';
import { useAppSelector } from '../../../redux/hook';
import { verifyToken } from '../../../utils/verifyToken';
import { useCurrentToken } from '../../../redux/feature/auth/authSlice';
import { TCart } from '../../../types/cartManagement';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const MyCart = () => {
    const [deleteCart] = useDeleteCartMutation()
    const token = useAppSelector(useCurrentToken);
    let user: any;

    if (token) {
        user = verifyToken(token);
    }

    const { data: myCart, isLoading, isFetching } = useGetMyCartsQuery(user?.email);


    const cartData = myCart?.data?.map(({ _id, product, quantity, price }: any) => ({
        key: _id,
        title: product.title || 'Unknown Product',
        price: price,
        quantity: quantity,
        stock: product.stock || 0,
    })) || [];

    const handleDelete = (myCart: { data: TCart[] | undefined; } | undefined) => {
        if (myCart) {
            const ids = myCart?.data!.map((item: any) => item.product._id);
            deleteCart(ids)
        }
    }
    const [quantity, setQuantity] = useState([
        cartData
    ]);


    const handleQuantityChange = (value: any, key: any): any => {
        const newData = quantity.map(item => {
            if (item.keys === key) {
                return { ...item, quantity: value };
            }
            return item;
        });
        setQuantity(newData);
    };

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
            render: (_text: any, record: any) => (
                <InputNumber
                    size="large"
                    min={1}
                    max={10}
                    defaultValue={record.quantity}
                    onChange={(value) => handleQuantityChange(value, record.key)}
                />
            ),
        },
        {
            title: 'Action',
            key: 'x',
            render: () => {
                return <div className="">
                    <Button onClick={() => handleDelete(myCart)} type="primary" danger>Delete</Button>
                </div>
            }
        },
    ];

    if (isLoading) {
        return <p>Loading!!!</p>
    }





    return (
        <div>
            <Table loading={isFetching} columns={columns} dataSource={cartData} pagination={false} />
            <Link to="/checkout">
                <Button style={{ marginTop: "30px" }} type="primary" block>
                    Process to CheckOut
                </Button>
            </Link>
        </div>
    );
};

export default MyCart;
