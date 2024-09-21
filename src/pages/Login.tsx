import { Button, Col, Flex } from "antd";
import { FieldValues } from "react-hook-form";
import { verifyToken } from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PForm from "../components/Form/PForm";
import { useAppDispatch } from "../redux/hook";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { setUser, TUser } from "../redux/feature/auth/authSlice";
import PInput from "../components/Form/PInput";


const Login = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [login] = useLoginMutation();
    const defaultValues = {
        email: "web@programming-hero.com",
        password: "ph-password"
    }

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Logging Progress!")
        try {
            const userInfo = {
                email: data.email,
                password: data.password
            }
            const res = await login(userInfo);
            const token = res.data.data.accessToken
            const user = verifyToken(token) as TUser
            dispatch(setUser({ user: user, token: token }))
            toast.success("User Login Successfully!", { id: toastId })

            if (user.role) {
                return navigate(`/${user?.role}/dashboard`)
            } else {
                return navigate(`/`)
            }

        } catch (error) {
            toast.error("Something went to Wrong", { id: toastId })
        }
    }
    return (
        <Flex justify="center" align="center" style={{ marginTop: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Login With PicoStore</h2>
                    <p style={{ margin: "20px 0" }}>Welcome Back! Let&lsquo;s Get Started</p>
                </div>
                <PForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <PInput type="text" name="email" label={"Email: "} />
                    <PInput type="password" name="password" label={"Password: "} />
                    <Button htmlType="submit" type="primary" block>Login</Button>
                    <p style={{ margin: '20px 0' }}>Don&lsquo;t have account ? Please <Link to={"/register"}>Register</Link></p>
                </PForm>
            </Col>
        </Flex>
    );
};

export default Login;