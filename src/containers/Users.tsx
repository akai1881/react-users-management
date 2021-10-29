import { UserAddOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import { deleteUser } from 'api/user';
import { UsersList } from 'components/UsersList';
import MainLayout from 'layouts/MainLayout';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeleteUser } from 'store/actions/userActions';
import { Users } from 'store/actions/usersActions';
import { UsersSelector } from 'store/slices/users';
import { useAppDispatch, useAppSelector } from 'utils/hooks';

export default function () {
    const dispatch = useAppDispatch();
    const { users, loading } = useAppSelector(UsersSelector);

    useEffect(() => {
        dispatch(Users());
    }, [dispatch]);

    const handleDelete = (id: any) => {
        dispatch(DeleteUser(id));
    };

    return (
        <MainLayout>
            <Divider>Users</Divider>
            <Link to={`/create`}>
                <Button type="primary" icon={<UserAddOutlined />}>
                    Add new User
                </Button>
            </Link>
            <UsersList users={users} loading={loading} onDelete={handleDelete} />
        </MainLayout>
    );
}
