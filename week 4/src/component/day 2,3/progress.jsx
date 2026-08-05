import { useState, useEffect } from "react";

function Progress() {
  // 1. useState — counter
  const [count, setCount] = useState(0);

  // 2. useEffect — dummy data fetch simulation
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyUser = {
      name: "Ali Raza",
      email: "aliraza@example.com",
    };

    const timer = setTimeout(() => {
      setUser(dummyUser);
      setLoading(false);
    }, 1000); // 1 second delay taake loading dikhe

    return () => clearTimeout(timer); // cleanup
  }, []); // empty array = sirf mount pe chalega

  // 3. List rendering
  const fruits = [
    { id: 1, name: "Apple", color: "Red", price: 120, inStock: true },
    { id: 2, name: "Banana", color: "Yellow", price: 60, inStock: true },
    { id: 3, name: "Mango", color: "Orange", price: 150, inStock: false },
    { id: 4, name: "Orange", color: "Orange", price: 90, inStock: true },
    { id: 5, name: "Grapes", color: "Green", price: 200, inStock: false },
  ];

  // 4. Conditional rendering
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [hasNotifications, setHasNotifications] = useState(true);

  // 5. Search/filter
  const [query, setQuery] = useState("");
  const items = ["React", "Tailwind", "JavaScript", "Node", "MongoDB"];

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col gap-6 items-center">
      <h1 className="text-2xl font-bold mb-2">React + Tailwind Practice</h1>

      {/* 1. useState — Counter */}
      <div className="flex flex-col items-center gap-3 p-6 border rounded">
        <h2 className="font-bold text-lg">1. useState — Counter</h2>
        <p className="text-2xl font-bold">{count}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>

      {/* 2. useEffect — Dummy user fetch */}
      <div className="p-6 border rounded">
        <h2 className="font-bold text-lg mb-2">2. useEffect — Dummy User</h2>
        {loading ? (
          <p className="text-gray-400 text-sm">Loading...</p>
        ) : (
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        )}
      </div>

      {/* 3. List rendering + key prop */}
      <div className="p-6 border rounded w-full max-w-md">
        <h2 className="font-bold text-lg mb-2">3. List Rendering — Fruits</h2>
        <ul className="space-y-2">
          {fruits.map((fruit) => (
            <li
              key={fruit.id}
              className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded text-gray-800"
            >
              <div>
                <p className="font-medium">{fruit.name}</p>
                <p className="text-xs text-gray-500">Color: {fruit.color}</p>
              </div>

              <div className="text-right">
                <p className="font-medium">Rs. {fruit.price}</p>
                {fruit.inStock ? (
                  <span className="text-xs text-green-600">In Stock</span>
                ) : (
                  <span className="text-xs text-red-500">Out of Stock</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500 mt-3">
          Total items: {fruits.length}
        </p>
      </div>

      {/* 4. Conditional rendering — && aur ternary */}
      <div className="p-6 border rounded">
        <h2 className="font-bold text-lg mb-2">4. Conditional Rendering</h2>

        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            Toggle Login
          </button>
          <button
            onClick={() => setHasNotifications(!hasNotifications)}
            className="px-3 py-1 bg-purple-500 text-white rounded text-sm"
          >
            Toggle Notifications
          </button>
        </div>

        {isLoggedIn ? (
          <p className="text-green-600">Welcome back!</p>
        ) : (
          <p className="text-red-600">Please log in.</p>
        )}

        {hasNotifications && (
          <p className="text-blue-500 mt-2">You have new notifications</p>
        )}
      </div>

      {/* 5. Search / Filter */}
      <div className="p-6 border rounded max-w-sm">
        <h2 className="font-bold text-lg mb-2">5. Search / Filter</h2>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <ul className="mt-3 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <li key={i} className="px-2 py-1 bg-gray-50 rounded">
                {item}
              </li>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No results found</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Progress;