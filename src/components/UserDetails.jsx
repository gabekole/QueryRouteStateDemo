import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, addFavorite } from '../slices/favoritesSlice';
import usersData from '../users.json';

function UserDetails() {
  const { id } = useParams();
  const user = usersData.find(user => user.id === parseInt(id));

  const favorites = useSelector(state => state.favorites.value);
  const dispatch = useDispatch();

  const isFavorite = favorites.some(fav => fav.id === user.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(user));
    } else {
      dispatch(addFavorite(user));
    }
  };

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p className='lead fs-3'>Name: {user.name}</p>
          <p className='lead'>Date of Birth: {user.dob}</p>
          <p className='lead'>Occupation: {user.occupation}</p>
          <button className='btn btn-outline-secondary' onClick={toggleFavorite}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default UserDetails;
