
import { Button, Rate, Row, Col } from 'antd';
import { useGetSingleProductsQuery } from '../../redux/feature/Admin/productManagement.api';
import { useParams } from 'react-router-dom';
import { useAddToCartMutation } from '../../redux/feature/User/CartManagement.api';
import { useAppSelector } from '../../redux/hook';
import { useCurrentToken } from '../../redux/feature/auth/authSlice';
import { verifyToken } from '../../utils/verifyToken';
import { toast } from 'sonner';

const Product = () => {
    const token = useAppSelector(useCurrentToken);

    let user: any;

    if (token) {
        user = verifyToken(token)
    }
    const [addToCart] = useAddToCartMutation();
    const { productId } = useParams()
    const { data: product, isLoading, isFetching } = useGetSingleProductsQuery(productId);
    if (isLoading && isFetching) {
        return <div>Loading ....</div>
    }

    const { image, title, brand, availableQuantity, price, rating, _id } = product?.data;



    const handleAddToCart = async () => {
        const toastId = toast.loading("Logging Progress!")
        const cartData = {
            userEmail: user?.email,
            product: _id,
            price: Number(price),
            quantity: Number(1)
        }

        const res = await addToCart(cartData);
        console.log(res)
        if (res?.data?.success) {
            toast.success(res.data.message, { id: toastId })
        } else {
            toast.error(res.data.message, { id: toastId })
        }
    };



    return (
        <div style={{ margin: "50px 100px" }}>
            <Row gutter={16}>
                <Col xs={24} md={12}>
                    <img
                        src={image}
                        alt="Sample"
                        style={{ width: '100%', height: '400px', borderRadius: '10px' }}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <div style={{ padding: '16px', height: "400px", display: 'flex', alignItems: 'center' }}>
                        <div className="">
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Title:</strong> {title}</p>
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Brand:</strong> {brand}</p>
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Available Quantity:</strong> {availableQuantity}</p>
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Price:</strong> ${price}</p>
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Rating:</strong> <Rate allowHalf disabled value={rating} /></p>
                            <Button
                                type="primary"
                                onClick={handleAddToCart}
                                disabled={availableQuantity <= 0}
                                style={{ marginTop: 16 }}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

        </div >
    );
};


export default Product;
