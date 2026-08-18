import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createUser } from "@/components/day 2/api/usersApi";

function CreateUserForm() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      reset();
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-8 flex flex-col items-start bg-white border border-gray-200 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Create New User</h2>

        <input
          {...register("name")}
          placeholder="Name"
          className="border border-gray-300 p-2 w-75 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="border border-gray-300 p-2 w-75 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 w-75 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          {...register("role")}
          className="border border-gray-300 p-2 w-75 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>

        <button
          disabled={mutation.isPending}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-xl"
        >
          {mutation.isPending ? "Submitting..." : "Create User"}
        </button>

        {mutation.isError && (
          <p className="text-red-500 text-sm">Error: {mutation.error.message}</p>
        )}
        {mutation.isSuccess && (
          <p className="text-green-600 text-sm">User created successfully!</p>
        )}
      </form>
    </div>
  );
}

export default CreateUserForm;