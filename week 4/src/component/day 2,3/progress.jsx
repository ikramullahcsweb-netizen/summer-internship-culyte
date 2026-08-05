import React, { useState, useEffect, useRef } from 'react'

const progress = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  
  const searchInputRef = useRef(null);

  const conceptsData = [
    {
      id: 1,
      category: "React Core",
      title: "useState Hook",
      description: "Reading and updating component state dynamically. Allows functional components to remember data across re-renders and trigger UI updates.",
      codeSnippet: "const [count, setCount] = useState(0);",
      difficulty: "Beginner"
    },
    {
      id: 2,
      category: "React Core",
      title: "useEffect Hook",
      description: "Running side-effects on component mount, unmount, or when specific dependency values change in the dependency array.",
      codeSnippet: "useEffect(() => { fetchUserData(); }, [userId]);",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      category: "React Core",
      title: "Lists & Keys Prop",
      description: "Rendering arrays efficiently using the .map() method combined with a unique key prop to help React identify modified or removed items.",
      codeSnippet: "{items.map(item => <li key={item.id}>{item.name}</li>)}",
      difficulty: "Beginner"
    },
    {
      id: 4,
      category: "React Core",
      title: "Conditional Rendering",
      description: "Controlling UI elements dynamically using logical short-circuit (&&) operators, ternary (? :) conditions, or if-else blocks.",
      codeSnippet: "{isLoggedIn ? <AdminDashboard /> : <LoginPrompt />}",
      difficulty: "Beginner"
    },
    {
      id: 5,
      category: "React Advanced",
      title: "useRef Hook",
      description: "Accessing and manipulating DOM elements directly without triggering re-renders, or storing mutable variables across renders.",
      codeSnippet: "const inputRef = useRef(null); inputRef.current.focus();",
      difficulty: "Advanced"
    },
    {
      id: 6,
      category: "React Advanced",
      title: "Event Handling & Forms",
      description: "Managing user inputs using controlled components where form data is handled by component state via onChange event listeners.",
      codeSnippet: "const handleChange = (e) => setValue(e.target.value);",
      difficulty: "Intermediate"
    },
    {
      id: 7,
      category: "Tailwind CSS",
      title: "Utility Classes",
      description: "Fast styling using built-in utility classes for spacing (p-4, m-2), flexbox, grid layouts, custom colors, and typography properties.",
      codeSnippet: "className=\"flex items-center justify-between p-4 bg-white shadow-md\"",
      difficulty: "Beginner"
    },
    {
      id: 8,
      category: "Tailwind CSS",
      title: "Responsive & State Variants",
      description: "Using breakpoint prefixes like sm:, md:, lg:, xl:, and state variants like hover:, focus:, active: for interactive multi-device designs.",
      codeSnippet: "className=\"bg-blue-500 hover:bg-blue-600 md:w-1/2 lg:w-1/3\"",
      difficulty: "Intermediate"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    console.log("Detailed Progress component mounted successfully!");
    
    // Optional: Focus search input automatically on mount using useRef
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Toggle favorite concept function
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter logic based on search term and category
  const filteredConcepts = conceptsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 sm:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Status Notification */}
        {isLoaded && (
          <div className="mb-6 p-4 bg-gray-50 border border-gray-300 rounded text-gray-700 text-sm flex items-center justify-between shadow-sm">
            <span>System Status: Extended React & Tailwind Curriculum Loaded ({conceptsData.length} Topics)</span>
            <span className="text-xs bg-gray-200 text-gray-800 font-medium px-2.5 py-1 rounded">Active</span>
          </div>
        )}

        {/* Header Section */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Comprehensive Frontend Progress
          </h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            A detailed breakdown of React hooks, state management patterns, event handlers, and Tailwind CSS configuration principles.
          </p>
          
          {/* Search Bar & Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input 
              ref={searchInputRef}
              type="text"
              placeholder="Search concepts or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-96 px-4 py-2.5 bg-white border border-gray-300 rounded focus:outline-none focus:border-black text-gray-900 shadow-sm"
            />
            
            <div className="flex gap-2 flex-wrap justify-center">
              {['All', 'React Core', 'React Advanced', 'Tailwind CSS'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 text-xs font-medium rounded border transition-colors ${
                    selectedCategory === category 
                      ? 'bg-black text-white border-black' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Results Counter */}
        <div className="mb-6 text-xs text-gray-500 font-medium">
          Showing {filteredConcepts.length} of {conceptsData.length} concepts
        </div>

        {/* Main Content Grid */}
        {filteredConcepts.length === 0 ? (
          <div className="text-center py-16 text-gray-500 border border-dashed border-gray-300 rounded">
            No matching concepts found for "{searchTerm}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredConcepts.map((item) => {
              const isFav = favorites.includes(item.id);
              return (
                <div 
                  key={item.id} 
                  className="p-6 rounded border border-gray-200 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-100 text-gray-800">
                        {item.category}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                          item.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          item.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {item.difficulty}
                        </span>
                        
                        <button 
                          onClick={() => toggleFavorite(item.id)}
                          className={`text-xs px-2 py-0.5 rounded border transition-colors ${
                            isFav ? 'bg-amber-100 border-amber-300 text-amber-800' : 'bg-gray-50 border-gray-200 text-gray-400 hover:text-gray-700'
                          }`}
                        >
                          {isFav ? '★ Saved' : '☆ Save'}
                        </button>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded p-3 font-mono text-xs text-gray-800 overflow-x-auto">
                    <code>{item.codeSnippet}</code>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Section */}
        <footer className="mt-16 text-center text-xs text-gray-500 border-t border-gray-200 pt-6">
          <p>Frontend Development Internship Program • Day 2 & 3 Modules</p>
          <p className="mt-1">Tip: Prettier auto-sorts classes — never hand-order them!</p>
        </footer>

      </div>
    </div>
  )
}

export default progress