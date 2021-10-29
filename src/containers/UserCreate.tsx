import { Divider, message } from 'antd';
import { createUser } from 'api/user';
import CreateForm from 'components/UserForm/CreateForm';
import MainLayout from 'layouts/MainLayout';
import { useHistory } from 'react-router-dom';
import GoBack from 'shared/GoBack';
import { User } from 'store/types/user';

function CreateUser() {
    const history = useHistory();

    const handleCreate = async (data: User) => {
        try {
            await createUser(data);
            history.push('/');
            message.success('Created successfully', 1.5);
        } catch (e) {
            message.error('Some error occurred try again later', 1.5);
        }
    };

    return (
        <MainLayout>
            <Divider>Create User</Divider>
            <GoBack />
            <CreateForm onSubmit={handleCreate} />
        </MainLayout>
    );
}

export default CreateUser;
