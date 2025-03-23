import { useState } from 'react';

function LogSign() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6 px-4">
      <div className="w-[350px] bg-white border border-gray-300 p-6 rounded-md shadow-sm">

 
        <div className="flex justify-center mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3fVFpe2OaMdzvjkkj6wE4gFfJTAdWNkJSQ&s"
            alt="Instagram Preview"
            className="h-26"
          />
        </div>
        {isLogin ? (
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Phone number Username or Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-green-600">
              Sign In
            </button>
          </form>

        ) : (
          <form className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Mobile Number or Email"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="text"
              name="username"
              placeholder="Phone number,Username or email"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded"
            >
              Sign up
            </button>
          </form>
        )}
        <p className="mt-6 text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            className="text-blue-500 ml-1 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LogSign;