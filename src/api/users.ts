import { AxiosResponse } from 'axios';
import { api } from 'service';
import { User } from 'store/types/user';

export const getUsers = (): Promise<AxiosResponse<User[]>> => {
    return api.get<User[]>('contact/');
};
