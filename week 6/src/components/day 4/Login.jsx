import { useForm } from 'react-hook-form';
import useAuthStore from './store/useAuthStore';

function Login() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const onSubmit = (formData) => {
    const userData = {
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      role: formData.role,
    };

    const fakeToken = 'demo-token-' + Date.now();
    login(userData, fakeToken);
    reset();
  };

  if (isAuthenticated) {
    return (
      <div className="max-w-md mx-auto bg-white rounded p-6 border border-gray-300">
        <h3 className="text-lg font-bold text-gray-800">Logged In</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-600 mb-4">{user.gender} - {user.role}</p>

        <button
          onClick={logout}
          className="w-full bg-gray-800 text-white font-medium py-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 border border-gray-300">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Login</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'At least 6 characters' },
            })}
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
          {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Gender</label>
          <select
            {...register('gender', { required: 'Gender is required' })}
            defaultValue=""
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="" disabled>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-600 text-xs mt-1">{errors.gender.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Role</label>
          <select
            {...register('role', { required: 'Role is required' })}
            defaultValue=""
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="" disabled>Select role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
          {errors.role && <p className="text-red-600 text-xs mt-1">{errors.role.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white font-medium py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;