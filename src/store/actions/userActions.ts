import { deleteUser, getOneUser } from 'api/user';
import { AppDispatch } from 'store';
import { getOneUserError, getOneUserPending, getOneUserSuccess } from 'store/slices/user';
import { Users } from './usersActions';

export const OneUser = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getOneUserPending());
        const { data } = await getOneUser(id);
        dispatch(getOneUserSuccess(data));
    } catch (error: any) {
        dispatch(getOneUserError(error.message));
    }
};

export const DeleteUser = (id?: number) => async (dispatch: AppDispatch) => {
    try {
        await deleteUser(id);
        dispatch(Users());
    } catch (e) {
        console.log(e);
    }
};
