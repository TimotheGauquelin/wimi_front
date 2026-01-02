import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-black-font text-center">Sign In</h2>
      <form className="text-black-font">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base font-semibold">Email</label>
            <input type="email" id="email" className="w-full p-3 rounded-md border border-gray-outline focus:outline-none focus:ring-2 focus:ring-true-blue" placeholder="jane.doe@gmail.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-base font-semibold">Password</label>
            <input type="password" id="password" className="w-full p-3 rounded-md border border-gray-outline focus:outline-none focus:ring-2 focus:ring-true-blue" placeholder="********" />
          </div>
          <button type="submit" className="w-full p-3 cursor-pointer rounded-md bg-true-blue text-white">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

