import { Button, Col, Flex } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PForm from "../components/Form/PForm";
import { useRegisterMutation } from "../redux/feature/auth/authApi";
import PInput from "../components/Form/PInput";



const Register = () => {
    const navigate = useNavigate();
    const [register] = useRegisterMutation()


    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Logging Progress!")
        try {
            const userInfo = {
                ...data
            }
            const res = await register(userInfo);
            if (res.data.success) {
                toast.success("User Registered Successfully!", { id: toastId })
                return navigate(`/login`)
            }

        } catch (error) {
            toast.error("Something went to Wrong", { id: toastId })
        }
    }
    return (
        <Flex justify="center" align="center" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Register With PicoStore</h2>
                    <p style={{ margin: "20px 0" }}>Welcome Our PicoStore! Let&lsquo;s Register Now</p>
                </div>
                <PForm onSubmit={onSubmit}>
                    <PInput type="text" name="name" label={"Name: "} />
                    <PInput type="text" name="email" label={"Email: "} />
                    <PInput type="password" name="password" label={"Password: "} />
                    <PInput type="text" name="phone" label={"Phone: "} />
                    <PInput type="text" name="address" label={"Address: "} />
                    <Button htmlType="submit" type="primary" block>Register</Button>
                    <p style={{ margin: '20px 0' }}>Already have an account ? Please <Link to={"/login"}>Login</Link></p>
                </PForm>
            </Col>
        </Flex>
    );
};

export default Register;