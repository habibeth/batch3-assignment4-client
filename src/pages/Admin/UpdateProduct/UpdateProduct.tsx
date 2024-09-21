import { toast } from "sonner";
import { useGetSingleProductsQuery, useUpdateProductMutation } from "../../../redux/feature/Admin/productManagement.api";
import { FieldValues } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PForm from "../../../components/Form/PForm";
import PInput from "../../../components/Form/PInput";
import PSelect from "../../../components/Form/PSelect";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const { productId } = useParams()
    const [updateProduct] = useUpdateProductMutation();

    const { data: product, isLoading, isFetching } = useGetSingleProductsQuery(productId)

    const defaultValues = {
        title: product?.data?.title || '',
        brand: product?.data?.brand || '',
        availableQuantity: product?.data?.availableQuantity || '',
        price: product?.data?.price || '',
        rating: product?.data?.rating || '',
    }



    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Updating Progress!")
        try {
            const keyboardData = {
                id: productId,
                data: {
                    ...data,
                    availableQuantity: Number(data.availableQuantity),
                    price: Number(data.price),
                    rating: Number(data.rating)
                }
            }

            const res = await updateProduct(keyboardData);

            if (res.data.success) {
                toast.success(res.data.message, { id: toastId })
            }
        } catch (error) {
            toast.error("Something went to Wrong", { id: toastId })
        }
    }

    if (isLoading || isFetching) {
        return <p>Loading!!!</p>
    }

    return (
        <Flex justify="center" align="center" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Add Product</h2>
                </div>
                <PForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <PInput type="text" name="title" label={"Title: "} />
                    <PSelect
                        // options={brandOptions}
                        name="brand"
                        label="Keyboard Brand"
                    />
                    <PInput type="text" name="availableQuantity" label={"Available Quantity: "} />
                    <PInput type="text" name="price" label={"Price: "} />
                    <PInput type="text" name="rating" label={"Rating: "} />
                    <Button htmlType="submit" type="primary" block>Update Product</Button>
                </PForm>
            </Col>
        </Flex>
    );
};

export default UpdateProduct;