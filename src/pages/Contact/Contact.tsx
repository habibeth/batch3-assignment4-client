import { Button, Row, Col } from 'antd';
import PForm from '../../components/Form/PForm';
import PInput from '../../components/Form/PInput';
import { Link } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';
import PTextArea from '../../components/Form/PTextArea';



const ContactUs = () => {
    const onSubmit = (data: FieldValues) => {
        console.log('Form Submitted:', data);
    };

    return (
        <div style={{ padding: '50px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Contact Us</h2>

            <Row justify="center">
                <Col xs={24} sm={16} md={12}>
                    <PForm onSubmit={onSubmit}>
                        <PInput type="text" name="name" label={"Name: "} />
                        <PInput type="text" name="phone" label={"Phone: "} />
                        <PInput type="text" name="email" label={"Email: "} />
                        <PInput type="text" name="subject" label={"Subject: "} />
                        <PTextArea name='message' label={'Your Message'} />
                        <Button htmlType="submit" type="primary" block>Submit Your Message</Button>
                        <p style={{ margin: '20px 0' }}>Don&lsquo;t have account ? Please <Link to={"/register"}>Register</Link></p>
                    </PForm>
                </Col>
            </Row>

            <div style={{ width: '100%', marginTop: '50px', textAlign: 'center' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58349.74557714343!2d90.27529814272164!3d23.930043008095566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e8fb9aa0707f%3A0x7f247dcf3afffae9!2sNational%20Martyrs&#39;%20Monument!5e0!3m2!1sen!2sbd!4v1726651237254!5m2!1sen!2sbd" width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"></iframe>
            </div>

            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <p><strong>Email:</strong> support@ecommerce.com</p>
                <p><strong>Phone:</strong> Phone: +880 1111 111 111</p>
                <p><strong>Address:</strong> Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default ContactUs;
