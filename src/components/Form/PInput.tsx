import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TInputProps = {
    type: string;
    name: string;
    label?: string | null;
    disabled?: boolean
}

const PInput = ({ type, name, label, disabled }: TInputProps) => {
    return <div style={{ marginBottom: "20px" }}>
        <Controller
            name={name}
            render={({ field }) => (
                <Form.Item label={label}>
                    <Input {...field} type={type} id={name} disabled={disabled} />
                </Form.Item>
            )}
        />

    </div>
};

export default PInput;