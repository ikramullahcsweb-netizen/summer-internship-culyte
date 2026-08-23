import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const createUser = async (userData) => {
  const res = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
  return res.data;
};

function MutationForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => reset(),
  });

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-1">Create New User</h3>
      <p className="text-sm text-gray-500 mb-5">Fill in the details below to add a user.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter full name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            {...register('email', { required: 'Email is required' })}
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2.5 rounded-lg transition flex items-center justify-center gap-2"
        >
          {mutation.isPending ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </>
          ) : (
            'Create User'
          )}
        </button>

        {mutation.isError && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-3 py-2">
            {mutation.error.message}
          </div>
        )}

        {mutation.isSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-600 text-sm rounded-lg px-3 py-2">
            ✅ User created successfully!
          </div>
        )}
      </form>
    </div>
  );
}

export default MutationForm;