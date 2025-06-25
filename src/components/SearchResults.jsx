import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import usersData from '../users.json';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons

import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, addFavorite } from '../slices/favoritesSlice';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('name') || '';
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  const favorites = useSelector(state => state.favorites.value);
  const dispatch = useDispatch();

  const isFavorite = (user) => {
    return favorites.some(fav => fav.id === user.id);
  };

  const toggleFavorite = (user) => {
    if (isFavorite(user)) {
      console.log("Is no longer favorite");
      dispatch(removeFavorite(user));
    } else {
      console.log("Is now favorite");
      dispatch(addFavorite(user));
    }
  };

  useEffect(() => {
    setFilteredUsers(
      usersData.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results</h2>
      <div className="d-flex flex-column align-items-start">
        {filteredUsers.map(user => (
          <div key={user.id} className="card mb-3" style={{ width: '100%' }}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <Link to={`/user/${user.id}`} className="card-title h5 mb-0 text-wrap">
                {user.name}
              </Link>
              <button
                className="btn btn-link"
                onClick={() => toggleFavorite(user)}
                style={{ fontSize: '1.5rem' }}
              >
                {isFavorite(user) ? <FaStar color="gold" /> : <FaRegStar />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
