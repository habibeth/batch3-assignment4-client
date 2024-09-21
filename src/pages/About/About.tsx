import { Row, Col, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
    return (
        <div style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
                About Us
            </Title>

            {/* Company Overview */}
            <Row justify="center" style={{ marginBottom: '50px' }}>
                <Col xs={24} sm={16} md={12}>
                    <Paragraph style={{ textAlign: 'center', fontSize: '16px' }}>
                        Welcome to PicoStore, your number one source for E Commerce. We're dedicated to giving you the very best of Keyboard, with a focus on quality, customer service, and uniqueness. Our mission is to bring premium products to customers worldwide, ensuring they get the best value for their money.
                    </Paragraph>
                </Col>
            </Row>

            {/* Mission Statement */}
            <Row justify="center" style={{ marginBottom: '50px' }}>
                <Col xs={24} sm={16} md={12}>
                    <Card>
                        <Title level={4}>Our Mission</Title>
                        <Paragraph>
                            Our mission is to provide the best quality keyboards that improves the lives of our customers. We are committed to ethical business practices, sustainability, and building a strong community of satisfied customers.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>

            {/* Company History */}
            <Row justify="center" style={{ marginBottom: '50px' }}>
                <Col xs={24} sm={16} md={12}>
                    <Card>
                        <Title level={4}>Our Story</Title>
                        <Paragraph>
                            Founded in 2024 by Ahsan Habib, PicoStore has come a long way from its beginnings in Dhaka, Bangladesh. When Jhankar Mahbub first started out, their passion for keyboard drove them to start Keyboard Hunting, so that Keyboard Hunting can offer you the world's most advanced Keyboard. We now serve customers all over Sylhet, and are thrilled to be a part of the Manufacturer industry.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>

            {/* Values */}
            <Row justify="center" style={{ marginBottom: '50px' }}>
                <Col xs={24} sm={16} md={12}>
                    <Card>
                        <Title level={4}>Our Values</Title>
                        <Paragraph>
                            At PicoStore, we value quality, customer satisfaction, and innovation. We strive to bring the best products to market while maintaining ethical standards and a commitment to sustainability.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>

            {/* Vision */}
            <Row justify="center" style={{ marginBottom: '50px' }}>
                <Col xs={24} sm={16} md={12}>
                    <Card>
                        <Title level={4}>Our Vision</Title>
                        <Paragraph>
                            Our vision is to become a leading name in the PicoStore. We aim to create a global community of customers who trust us for quality, reliability, and a seamless shopping experience.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>

            {/* Team Section (Optional) */}
            <Row justify="center" style={{ marginBottom: '50px' }}>
                <Col xs={24} sm={16} md={12}>
                    <Card>
                        <Title level={4}>Meet Our Team</Title>
                        <Paragraph>
                            Our dedicated team of professionals work tirelessly to bring you the best products and services. We believe that the strength of our company lies in our people.
                        </Paragraph>
                        {/* You can add team members with images and descriptions here */}
                    </Card>
                </Col>
            </Row>

            {/* Social Media Links (Optional) */}
            <Row justify="center">
                <Col xs={24} sm={16} md={12} style={{ textAlign: 'center' }}>
                    <Paragraph>Follow us on social media for updates and promotions:</Paragraph>
                    <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link> |
                    <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link> |
                    <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;
