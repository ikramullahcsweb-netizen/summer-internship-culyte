import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/components/day 1/api/productsApi";
import UserCard from "@/components/day 1/components/UserCard";

const LoadingState = () => (
  <div className="text-center p-6 text-gray-500 font-medium">
    Loading with TanStack Query...
  </div>
);

const ErrorState = ({ message }) => (
  <div className="text-center p-6 text-red-500 font-medium">
    Error: {message}
  </div>
);

const QueryList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} />;

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-2xl border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Day 1: TanStack Query (`useQuery`) - Users
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default QueryList;