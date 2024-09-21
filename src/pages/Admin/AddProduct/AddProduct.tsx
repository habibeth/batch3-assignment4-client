import { Button, Col, Flex, Form, Input } from "antd";
import PForm from "../../../components/Form/PForm";
import PInput from "../../../components/Form/PInput";
import { Controller, FieldValues } from "react-hook-form";
import { keyboardBrands } from "../../../contant/keyboardBrand";
import PSelect from "../../../components/Form/PSelect";
import { useCreateProductMutation } from "../../../redux/feature/Admin/productManagement.api";
import { toast } from "sonner";

const AddProduct = () => {
    const [createProduct] = useCreateProductMutation()


    const brandOptions = keyboardBrands?.map(item => ({
        value: item,
        label: item
    }))

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Logging Progress!")
        try {
            const keyboardData = {
                ...data,
                availableQuantity: Number(data.availableQuantity),
                price: Number(data.price),
                rating: Number(data.rating)
            }

            const formData = new FormData();
            formData.append('data', JSON.stringify(keyboardData));
            formData.append('file', data?.image);

            const res = await createProduct(formData);

            if (res.data.success) {
                toast.success(res.data.message, { id: toastId })
            }
        } catch (error) {
            toast.error("Something went to Wrong", { id: toastId })
        }
    }
    return (
        <Flex justify="center" align="center" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Add Product</h2>
                </div>
                <PForm onSubmit={onSubmit}>
                    <PInput type="text" name="title" label={"Title: "} />
                    <PSelect
                        options={brandOptions}
                        name="brand"
                        label="Keyboard Brand"
                    />
                    <PInput type="text" name="availableQuantity" label={"Available Quantity: "} />
                    <PInput type="text" name="price" label={"Price: "} />
                    <PInput type="text" name="rating" label={"Rating: "} />

                    <Controller
                        name="image"
                        render={({ field: { onChange, value, ...field } }) => (
                            <Form.Item label="Picture">
                                <Input
                                    type="file"
                                    value={value?.fileName}
                                    {...field}
                                    onChange={(e) => onChange(e.target.files?.[0])}
                                />
                            </Form.Item>
                        )}
                    />
                    <Button htmlType="submit" type="primary" block>Add Products</Button>
                </PForm>
            </Col>
        </Flex>
    );
};

export default AddProduct;