import { AxiosResponse } from 'axios';
import { api } from 'service';
import { User } from 'store/types/user';

export const getOneUser = (id: string): Promise<AxiosResponse<User>> => {
    return api.get<User>(`contact/${id}`);
};

export const editUser = async (user: User): Promise<AxiosResponse<User>> => {
    return api.put<User>(`contact/${user.id}`, user);
};

export const createUser = async (user: User): Promise<AxiosResponse<User>> => {
    return api.post<User>(`contact/`, user);
};

export const deleteUser = async (id?: number): Promise<AxiosResponse<User>> => {
    return api.delete<User>(`contact/${id}`);
};
