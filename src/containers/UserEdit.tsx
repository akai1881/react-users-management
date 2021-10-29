import { Divider, message } from 'antd';
import { editUser } from 'api/user';
import EditForm from 'components/UserForm/EditForm';
import MainLayout from 'layouts/MainLayout';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import GoBack from 'shared/GoBack';
import { OneUser } from 'store/actions/userActions';
import { UserSelector } from 'store/slices/user';
import { User } from 'store/types/user';
import { useAppDispatch, useAppSelector } from 'utils/hooks';

function UserEdit() {
    const { id } = useParams<Record<string, string>>();
    const { user } = useAppSelector(UserSelector);
    const history = useHistory();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!user) {
            dispatch(OneUser(id));
        }
    }, [id, user, dispatch]);

    const handleEdit = async (data: User) => {
        try {
            await editUser(data);
            history.push('/contact/' + id);
            message.success('Updated successfully', 1.5);
        } catch (e) {
            message.error('Some error occurred try again later', 1.5);
        }
    };

    return (
        <MainLayout>
            <Divider>Edit User</Divider>
            <GoBack />
            {user && <EditForm onSubmit={handleEdit} user={user} />}
        </MainLayout>
    );
}

export default UserEdit;
