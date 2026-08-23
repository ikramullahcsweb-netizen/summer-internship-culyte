// import { useState } from 'react';
// import axios from 'axios';
// import useAuthStore from './store/useAuthStore';

// function Login() {
//   const [loading, setLoading] = useState(false);
//   const login = useAuthStore((state) => state.login);
//   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
//   const user = useAuthStore((state) => state.user);
//   const logout = useAuthStore((state) => state.logout);

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get('https://randomuser.me/api/');
//       const userData = res.data.results[0];
//       const fakeToken = 'demo-token-' + Date.now();

//       login(userData, fakeToken);
//     } catch (error) {
//       console.error('Login failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (isAuthenticated) {
//     return (
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center">
//         <img
//           src={user.picture.large}
//           alt={user.name.first}
//           className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100"
//         />
//         <h3 className="text-xl font-bold text-gray-800">
//           {user.name.first} {user.name.last}
//         </h3>
//         <p className="text-sm text-gray-500 mb-4">{user.email}</p>

//         <div className="bg-green-50 border border-green-200 text-green-600 text-sm rounded-lg px-3 py-2 mb-4">
//           ✅ Logged in — session persisted after refresh
//         </div>

//         <button
//           onClick={logout}
//           className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition"
//         >
//           Logout
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center">
//       <h3 className="text-xl font-bold text-gray-800 mb-1">Welcome Back</h3>
//       <p className="text-sm text-gray-500 mb-5">Login to continue to your account.</p>

//       <button
//         onClick={handleLogin}
//         disabled={loading}
//         className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2.5 rounded-lg transition flex items-center justify-center gap-2"
//       >
//         {loading ? (
//           <>
//             <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//             Logging in...
//           </>
//         ) : (
//           'Login'
//         )}
//       </button>
//     </div>
//   );
// }

// export default Login;



import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuthStore from './store/useAuthStore';

function Login() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      // Real backend abhi nahi hai, is liye RandomUser API se profile data simulate kar rahe hain
      const res = await axios.get('https://randomuser.me/api/');
      const apiUser = res.data.results[0];

      // Entered email form se le rahe hain, baqi profile info API se
      const userData = {
        ...apiUser,
        email: formData.email, // jo email user ne type ki wahi rakhein
      };

      const fakeToken = 'demo-token-' + Date.now();
      login(userData, fakeToken);
      reset();
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center">
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100"
        />
        <h3 className="text-xl font-bold text-gray-800">
          {user.name.first} {user.name.last}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{user.email}</p>

        <div className="bg-green-50 border border-green-200 text-green-600 text-sm rounded-lg px-3 py-2 mb-4">
          ✅ Logged in — session persisted after refresh
        </div>

        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-1">Welcome Back</h3>
      <p className="text-sm text-gray-500 mb-5">Login to continue to your account.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'At least 6 characters' },
            })}
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2.5 rounded-lg transition flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;