import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../slices/favoritesSlice';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function Favorites() {
  const favorites = useSelector(state => state.favorites.value);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (user) => {
    dispatch(removeFavorite(user));
  };

  return (
    <div>
      <h2>Favorite Users</h2>
      <div className="d-flex flex-column align-items-start">
        {favorites.length > 0 ? (
          favorites.map(favorite => (
            <div key={favorite.id} className="card mb-3" style={{ width: '100%' }}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <Link to={`/user/${favorite.id}`} className="card-title h5 mb-0 text-wrap">
                  {favorite.name}
                </Link>
                <button
                  className="btn btn-link"
                  onClick={() => handleRemoveFavorite(favorite)}
                  style={{ fontSize: '1.5rem' }}
                >
                  <FaStar color="gold" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite users selected</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
