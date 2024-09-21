import { Col, Row } from "antd";

const WhyChooseMechanical = () => {
    return (
        <div style={{ margin: "50px 100px" }}>
            <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>Why Choose Mechanical Keyboards?</h2>
            <Row gutter={16}>
                <Col xs={24} md={12}>
                    <img
                        src={`https://m.media-amazon.com/images/I/81JvuedGx5L.jpg`}
                        alt="Sample"
                        style={{ width: '100%', height: '400px', borderRadius: '10px' }}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <div style={{ padding: '16px' }}>
                        <p style={{ marginBottom: '10px', fontSize: '16px' }}>
                            <span style={{ fontWeight: "700" }}>Tactile Feedback:</span> Mechanical keyboards provide a distinct tactile feedback with each keystroke, allowing for a more satisfying typing experience. This feedback can enhance typing accuracy and speed, making them a preferred choice for long typing sessions.
                        </p>
                        <p style={{ marginBottom: '10px', fontSize: '16px' }}>
                            <span style={{ fontWeight: "700" }}>Durability:</span> Built to last, mechanical keyboards feature individual mechanical switches that are rated for millions of key presses. Unlike traditional rubber dome keyboards, which wear out quickly, mechanical keyboards maintain their performance over time.
                        </p>
                        <p style={{ marginBottom: '10px', fontSize: '16px' }}>
                            <span style={{ fontWeight: "700" }}>Variety of Switches:</span> Mechanical keyboards come with a range of switch types, each offering different actuation forces and sound levels. Whether you prefer a clicky, tactile feel or a smooth, quiet keystroke, there’s a switch to suit your typing style.
                        </p>
                        <p style={{ marginBottom: '10px', fontSize: '16px' }}>
                            <span style={{ fontWeight: "700" }}>Customization:</span> Many mechanical keyboards allow for customization of keycaps, switches, and even lighting effects. This not only allows for a personalized aesthetic but also enhances the user experience.
                        </p>
                        <p style={{ marginBottom: '10px', fontSize: '16px' }}>
                            <span style={{ fontWeight: "700" }}>Improved Gaming Performance:</span> Gamers benefit from the quick response times and anti-ghosting features of mechanical keyboards, which ensure that every key press registers accurately during intense gaming sessions.
                        </p>

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default WhyChooseMechanical;