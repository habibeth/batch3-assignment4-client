import { Button, Col, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PForm from "../../../components/Form/PForm";
import PInput from "../../../components/Form/PInput";
import { verifyToken } from "../../../utils/verifyToken";
import { useAppSelector } from "../../../redux/hook";
import { useCurrentToken } from "../../../redux/feature/auth/authSlice";
import { useDeleteCartMutation, useGetMyCartsQuery } from "../../../redux/feature/User/CartManagement.api";


const Checkout = () => {
    const token = useAppSelector(useCurrentToken);

    let user: any;

    if (token) {
        user = verifyToken(token)
    }

    const [deleteCart] = useDeleteCartMutation();
    const { data: myCart, isLoading, isFetching } = useGetMyCartsQuery(user?.email);

    const navigate = useNavigate();
    const defaultValues = {
        name: user?.name ? user?.name : '',
        email: user?.email ? user?.email : '',
        phone: user?.phone ? user?.phone : '',
        address: user?.address ? user?.address : ''
    }


    const onSubmit = async () => {
        const toastId = toast.loading("Logging Progress!")

        if (myCart) {
            const ids = myCart?.data!.map((item: any) => item.product._id);
            const res = await deleteCart(ids);
            if (res.data.success) {
                toast.success("Order Confirm Successfully!", { id: toastId })
                return navigate(`/`)
            }

            else {
                toast.error("Something went to Wrong", { id: toastId })
            }
        }
    }

    if (isLoading || isFetching) {
        return <p>Loading!!!</p>
    }

    return (
        <Flex justify="center" align="center" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Order Confirm With PicoStore</h2>
                </div>
                <PForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <PInput type="text" name="name" label={"Name: "} />
                    <PInput type="text" name="email" label={"Email: "} />
                    <PInput type="text" name="phone" label={"Phone: "} />
                    <PInput type="text" name="address" label={"Address: "} />
                    <Button htmlType="submit" type="primary" block>Confirm Order</Button>
                </PForm>
            </Col>
        </Flex>
    );
};

export default Checkout;