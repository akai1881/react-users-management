import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'store/types/user';

interface IProps {
    user: User;
    onDelete: (id?: number) => void;
}

const UserCard: React.FC<IProps> = ({ user, onDelete }) => {
    const actions = (
        <Space size="middle">
            <Link to={`/edit/${user.id}`}>
                <Button type="primary" icon={<EditOutlined />}>
                    Edit
                </Button>
            </Link>
            <Button type="primary" icon={<DeleteOutlined />} onClick={() => onDelete(user.id)}>
                Delete
            </Button>
        </Space>
    );

    return (
        <Card title={`${user?.first_name} ${user?.last_name}`} extra={actions}>
            <p>Date of birth: {user?.birth_date}</p>
            <p>Gender: {user?.gender}</p>
            <p>Job: {user?.job}</p>
            <p>Biography: {user?.biography}</p>
            <p>Status: {user?.is_active ? 'Enabled' : 'Disabled'}</p>
        </Card>
    );
};

export default UserCard;
