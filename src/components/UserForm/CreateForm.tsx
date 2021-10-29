import { useState } from 'react';
import { Card, Input, Form, DatePicker, Button, Select, Checkbox } from 'antd';
import { User } from 'store/types/user';

interface IProps {
    onSubmit: (data: User) => void;
}

const initialValues: User = {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: '',
    biography: '',
    is_active: false,
    job: '',
};

const CreateForm: React.FC<IProps> = ({ onSubmit }) => {
    const [form] = Form.useForm();
    const [checkEnabled, setCheckEnabled] = useState(false);

    const fieldRules = [{ required: true, max: 256 }];

    const handler = (data: any) => {
        const values = {
            ...data,
            birth_date: data['birth_date'].format('YYYY-MM-DD'),
            is_active: checkEnabled,
        };
        onSubmit(values);
    };

    return (
        <Card style={{ width: 450, margin: 'auto' }}>
            <Form
                layout="vertical"
                className="form"
                form={form}
                onFinish={handler}
                initialValues={initialValues}
                validateMessages={{ required: '${label} is required' }}
            >
                <Form.Item name="first_name" label="First name" required rules={fieldRules}>
                    <Input />
                </Form.Item>
                <Form.Item name="last_name" label="Last name" required rules={fieldRules}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Date of birth"
                    required
                    name="birth_date"
                    rules={[{ required: true, message: 'Please enter date of birth' }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item required label="Gender" name="gender" rules={[{ required: true }]}>
                    <Select>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="job" label="Job" required rules={fieldRules}>
                    <Input />
                </Form.Item>
                <Form.Item name="biography" label="Biography" rules={[{ required: true, max: 1024 }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="is_active" required>
                    <Checkbox checked={checkEnabled} onChange={(e) => setCheckEnabled(e.target.checked)}>
                        Enabled
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default CreateForm;

// <Controller
//                     name="first_name"
//                     control={control}
//                     render={({ field }) => (
//                         <Form.Item label="First name" required>
//                             <Input {...field} />
//                         </Form.Item>
//                     )}
//                 />
//                 <Controller
//                     name="last_name"
//                     control={control}
//                     render={({ field }) => (
//                         <Form.Item label="Last name" required>
//                             <Input {...field} />
//                         </Form.Item>
//                     )}
//                 />
//                 <Controller
//                     name="birth_date"
//                     control={control}
//                     render={({ field }) => (
//                         <Form.Item label="Date of birth" required>
//                             <DatePicker />
//                         </Form.Item>
//                     )}
//                 />
