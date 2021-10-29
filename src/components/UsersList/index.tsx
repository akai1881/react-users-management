import React, { useState } from 'react';
import { Button, Space, Table } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { User } from 'store/types/user';
import MyTable from 'shared/MyTable';
import { Link } from 'react-router-dom';

interface IProps {
    users: User[];
    loading: boolean;
    onDelete: (id: string) => void;
}

export const UsersList: React.FC<IProps> = ({ users, loading, onDelete }) => {
    const columns = [
        {
            title: 'First name',
            dataIndex: 'first_name',
            key: 'first_name',
            render: (text: string, row: any) => <Link to={`contact/${row.id}`}>{text}</Link>,
        },
        {
            title: 'Date of birth',
            dataIndex: 'birth_date',
            key: 'birth_date',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Action',
            key: 'action',
            width: 70,
            render: (row: any) => (
                <Space size="middle">
                    <Button type="primary" icon={<DeleteFilled />} onClick={() => onDelete(row.id)} />
                </Space>
            ),
        },
    ];

    return <MyTable dataSource={users} rowKey="id" columns={columns} loading={loading} pagination={false} />;
};
