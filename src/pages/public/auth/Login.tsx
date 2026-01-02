import Input from '@/components/form/Input/Input';
import React, { useState } from 'react';
import { LoginDataProps } from '@/types/auth.types';

const Login: React.FC = () => {

  const [loginData, setLoginData] = useState<LoginDataProps>({
    email: '',
    password: '',
  });

  return (
    <div>
      <h2 className="text-xl font-bold text-black-font text-center">Sign In</h2>
      <form className="text-black-font">
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            placeholder="jane.doe@gmail.com"
            type="email"
          />
          <Input
            label="Password"
            placeholder="********"
            type="password"
          />
          <button type="submit" className="w-full p-3 cursor-pointer rounded-md bg-true-blue text-white">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

