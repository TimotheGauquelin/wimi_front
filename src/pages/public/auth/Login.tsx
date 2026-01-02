import Input from '@/components/form/Input/Input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDataProps } from '@/types/auth.types';
import { useAuth } from '@/stores/authStore';
import { handleLogin } from '@/services/auth';
import { HOME_FRONT_URL } from '@/utils/urls/urlFront/privateUrl';
import TextError from '@/components/errors/TextError/TextError';
import SubmitButton from '@/components/buttons/SubmitButton/SubmitButton';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loginData, setLoginData] = useState<LoginDataProps>({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const user = await handleLogin(loginData);
      login(user);
      navigate(HOME_FRONT_URL);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An Error Occurred');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-black-font text-center">Sign In</h2>
      <form className="text-black-font" onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            placeholder="jane.doe@gmail.com"
            type="email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
          <Input
            label="Password"
            placeholder="********"
            type="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <TextError error={error} />
          <SubmitButton
            loading={loading}
            loadingText="Attempting to connect..."
            buttonText="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;

