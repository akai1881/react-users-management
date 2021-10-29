import { getUsers } from 'api/users';
import { AppDispatch } from 'store';
import { getUsersError, getUsersPending, getUsersSuccess } from 'store/slices/users';

export const Users = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(getUsersPending());
        const { data } = await getUsers();
        dispatch(getUsersSuccess(data));
    } catch (error: any) {
        dispatch(getUsersError(error.message));
    }
};
