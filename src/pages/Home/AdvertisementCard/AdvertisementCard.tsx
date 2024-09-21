import { DollarOutlined, ShoppingOutlined, ThunderboltOutlined, TruckOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";

const AdvertisementCard = () => {
    return (
        <div style={{ overflow: 'hidden', marginTop: '50px' }}>
            <Row gutter={10} style={{ padding: "0 200px" }}>
                <Col xs={24} sm={12} md={6} >
                    <Card hoverable style={{ backgroundColor: '#b5f5ec' }}>
                        <TruckOutlined style={{ fontSize: "50px" }} />
                        <div style={{ marginTop: '10px' }}>
                            <p style={{ fontSize: "20px", fontWeight: '700' }}>Free Delivery</p>
                            <p style={{ margin: '10px 0' }}>Enjoy Free Delivery on All Orders Above $500</p>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card hoverable style={{ backgroundColor: '#d9f7be' }}>
                        <DollarOutlined style={{ fontSize: "50px" }} />
                        <div style={{ marginTop: '10px' }}>
                            <p style={{ fontSize: "20px", fontWeight: '700' }}>Limited-Time Discount</p>
                            <p style={{ margin: '10px 0' }}>Hurry! Get 20% Off on Your First Purchase - Use Code FORDER2024</p>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card hoverable style={{ backgroundColor: '#ffd6e7' }}>
                        <ShoppingOutlined style={{ fontSize: "50px" }} />
                        <div style={{ marginTop: '10px' }}>
                            <p style={{ fontSize: "20px", fontWeight: '700' }}>Buy One, Get One Free</p>
                            <p style={{ margin: '10px 0' }}>Super Sale – Buy One, Get One Free on Selected Items!</p>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card hoverable style={{ backgroundColor: '#efdbff' }}>
                        <ThunderboltOutlined style={{ fontSize: "50px" }} />
                        <div style={{ marginTop: '10px' }}>
                            <p style={{ fontSize: "20px", fontWeight: '700' }}>Flash Sale</p>
                            <p style={{ margin: '10px 0' }}>24-Hour Flash Sale – Up to 70% Off! Don’t Miss Out!</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AdvertisementCard;