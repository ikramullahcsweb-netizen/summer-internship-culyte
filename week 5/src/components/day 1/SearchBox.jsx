import React, { useState, useEffect } from 'react'
import UseDebounce from '../../hooks/UseDebounce'

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = UseDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API call with:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="border rounded-md px-3 py-2 w-full"
    />
  )
}

export default SearchBox