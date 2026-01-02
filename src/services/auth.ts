import { api } from './api';
import { LoginDataProps, User } from '@/types/auth.types';

export const handleLogin = async (loginData: LoginDataProps): Promise<User> => {
  const users = await api.get<User[]>(`/users?email=${loginData.email}&password=${loginData.password}`);

  if (users && users.length > 0) {
    return users[0];
  } else {
    throw new Error('Email and/or password are incorrect');
  }
};

