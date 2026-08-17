import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Function to fetch products (Fixed URL spelling)
const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=5');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const QueryList = () => {
  // Using the useQuery hook for products
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <div className="text-center p-6 text-gray-500 font-medium">Loading products with TanStack Query...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-500 font-medium">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Day 1: TanStack Query (`useQuery`) - Products</h2>
      <ul className="space-y-3">
        {data.map((product) => (
          <li key={product.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
            <span className="font-semibold text-gray-700 truncate max-w-[220px]">{product.title}</span>
            <span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded">${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryList;