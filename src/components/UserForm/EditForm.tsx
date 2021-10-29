import { Card, Input, Form, DatePicker, Button, Select, Checkbox } from 'antd';
import { User } from 'store/types/user';
import { useState } from 'react';
import moment from 'moment';

interface IProps {
    onSubmit: (data: User) => void;
    user: Record<string, any>;
}

const EditForm: React.FC<IProps> = ({ onSubmit, user }) => {
    const [form] = Form.useForm();
    const [checkEnabled, setCheckEnabled] = useState(user.is_active);
    const [values] = useState({ ...user, birth_date: moment(user.birth_date, 'YYYY-MM-DD') });

    const fieldRules = [{ required: true, max: 256 }];

    const handler = (data: any) => {
        const values = {
            ...data,
            birth_date: data['birth_date'].format('YYYY-MM-DD'),
            is_active: checkEnabled,
            id: user.id,
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
                initialValues={values}
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
                    <DatePicker format="YYYY-MM-DD" />
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

export default EditForm;
