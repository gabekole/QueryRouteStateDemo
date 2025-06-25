import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usersData from '../users.json';
import { FaStar, FaRegStar } from 'react-icons/fa';

// 1. Import search parameters function from React Router
import { useSearchParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, addFavorite } from '../slices/favoritesSlice';


function SearchResults() {

  // 2. Declare object and get the "name" query parameter
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('name') || '';

  // 3. Filter users based on the search term
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(
      usersData.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  
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


  return (
    <div>
      <h2>Search Results</h2>
      <div className="d-flex flex-column align-items-start">
        {
        // 4. Display the filtered users with .map()
        filteredUsers.map(user => (
          <div key={user.id} className="card mb-3" style={{ width: '100%' }}>
            <div className="card-body d-flex justify-content-between align-items-center">

              {/* 5. Display a Link to each user's page with a route parameter */}
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
