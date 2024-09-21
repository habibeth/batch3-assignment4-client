import { Button, Card, Col, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

const FeatureCard = ({ product }: any) => {
    const { title, brand, price, availableQuantity, image, rating } = product;

    return (
        <Col xs={24} sm={12} md={8} style={{ marginBottom: '20px' }}>
            <Card
                hoverable
                cover={
                    <img
                        alt="Product"
                        src={image}
                        style={{ objectFit: 'cover', height: '300px' }}
                    />
                }
            >
                <Meta title={title} description={`Brand: ${brand}`} />
                <div style={{ marginTop: '10px' }}>
                    <p>Available Quantity: {availableQuantity}</p>
                    <p style={{ margin: '10px 0' }}>Price: ${price}</p>
                    <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <p style={{ marginRight: '5px' }}>Rating: </p>
                        <Rate disabled allowHalf defaultValue={rating} style={{ marginTop: '2px' }} />
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/products" style={{ width: '100%' }}>
                        <Button type="primary" style={{ width: '100%' }}>See Details</Button>
                    </Link>
                </div>
            </Card>
        </Col>
    );
};

export default FeatureCard;