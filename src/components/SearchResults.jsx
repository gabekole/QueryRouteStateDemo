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
      console.log("Is no longer favorite")
      dispatch(removeFavorite(user));
    } else {
      console.log("Is now favorite")
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
      <div className="d-flex flex-wrap">
        {filteredUsers.map(user => (
          <div key={user.id} className="card m-2" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title text-wrap">
                {user.name}
              </h5>
              <Link to={`/user/${user.id}`} className="btn btn-primary">
                View Details
              </Link>
              <button
                className="btn btn-link"
                onClick={() => toggleFavorite(user)}
              >
                {favorites.includes(user) ? <FaStar color="gold" /> : <FaRegStar />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
