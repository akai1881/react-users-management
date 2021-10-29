import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { User } from 'store/types/user';

interface UserState {
    user: null | User;
    loading: boolean;
    error: null | string;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getOneUserSuccess: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        getOneUserPending: (state) => {
            state.loading = true;
        },
        getOneUserError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
            state.user = null;
        },
    },
});

export const { getOneUserSuccess, getOneUserPending, getOneUserError } = userSlice.actions;

export const UserSelector = (state: RootState) => state.user;

export default userSlice.reducer;
