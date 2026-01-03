export interface LoginDataProps {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: string;
}

export interface UserWithPassword extends User {
  password: string;
}

