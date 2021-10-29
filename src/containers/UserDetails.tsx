import UserCard from 'components/UserCard';
import MainLayout from 'layouts/MainLayout';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import GoBack from 'shared/GoBack';
import MyPreloader from 'shared/MyPreloader';
import { DeleteUser, OneUser } from 'store/actions/userActions';
import { UserSelector } from 'store/slices/user';
import { useAppDispatch, useAppSelector } from 'utils/hooks';

const UserDetails = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const { user, loading } = useAppSelector(UserSelector);

    const { id } = useParams<Record<string, string>>();

    useEffect(() => {
        dispatch(OneUser(id));
    }, [id]);

    if (loading) {
        return <MyPreloader tip="...Loading" size="large" />;
    }

    const handleDelete = async (id?: number) => {
        await dispatch(DeleteUser(id));
        history.push('/');
    };

    return (
        <MainLayout>
            <GoBack />
            {user && <UserCard user={user} onDelete={handleDelete} />}
        </MainLayout>
    );
};

export default UserDetails;
