import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { User } from 'store/types/user';

interface UsersState {
    users: User[];
    loading: boolean;
    error: null | string;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersSuccess: (state, action: PayloadAction<User[]>) => {
            state.loading = false;
            state.users = action.payload;
            state.error = null;
        },
        getUsersPending: (state) => {
            state.loading = true;
        },
        getUsersError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
            state.users = [];
        },
    },
});

export const { getUsersSuccess, getUsersPending, getUsersError } = usersSlice.actions;

export const UsersSelector = (state: RootState) => state.users;

export default usersSlice.reducer;
