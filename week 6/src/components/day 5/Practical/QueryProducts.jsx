import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const res = await axios.get('https://fakestoreapi.com/products?limit=3');
  return res.data;
};

function QueryProducts() {
  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((p) => (
        <div key={p.id} className="border rounded p-3">
          <img src={p.image} alt={p.title} className="h-32 mx-auto" />
          <h3 className="text-sm font-semibold mt-2">{p.title}</h3>
          <p className="text-gray-600">${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default QueryProducts;