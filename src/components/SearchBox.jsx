import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div>
      <h2 className="text-center">Search Users</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
