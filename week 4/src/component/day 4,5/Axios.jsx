import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Axios = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products?limit=3");
        setProducts(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-lg text-gray-600 mt-10">Loading products...</p>;
  if (error) return <p className="text-center text-lg text-red-600 mt-10">Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold text-center my-4">Products (Axios)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
            <h3 className="text-sm font-semibold text-gray-800 text-center line-clamp-2">
              {product.title}
            </h3>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Axios