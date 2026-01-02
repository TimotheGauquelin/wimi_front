import Input from '@/components/form/Input/Input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDataProps } from '@/types/auth.types';
import { useAuth } from '@/stores/authStore';
import { handleLogin } from '@/services/auth';
import { HOME_FRONT_URL } from '@/utils/urls/urlFront/privateUrl';

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
          {error && (
            <div className="p-3 rounded-md text-red-font bg-light-red text-base font-semibold">
              <p><span>Error: </span>{error}</p>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 cursor-pointer rounded-md bg-true-blue text-white disabled:bg-pale-blue disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Attempting to connect...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

