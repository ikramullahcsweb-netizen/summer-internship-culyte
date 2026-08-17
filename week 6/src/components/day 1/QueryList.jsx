import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/components/day 1/api/productsApi";

const QueryList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="text-center p-6 text-gray-500 font-medium">
        Loading with TanStack Query...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-6 text-red-500 font-medium">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Day 1: TanStack Query (`useQuery`) - Users
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.map((user) => (
          <div
            key={user.login.uuid}
            className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center p-2"
          >
            <img
              src={user.picture.large}
              alt={user.name.first}
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="text-sm font-medium text-gray-700 mt-1">
              {user.name.first} {user.name.last}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueryList;