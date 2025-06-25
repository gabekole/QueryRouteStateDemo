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
      <form onSubmit={handleSearch} className="d-flex align-items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter name"
          className="form-control me-2"
          style={{ width: '300px', fontSize: '1.2rem' }}
        />
        <button className="btn btn-primary btn-lg" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
