import { configureStore, combineReducers } from '@reduxjs/toolkit';
import usersReducer from './slices/users';
import userReducer from './slices/user';

const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
