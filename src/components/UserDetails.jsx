import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, addFavorite } from '../slices/favoriteSlice';
import usersData from '../users.json';

function UserDetails() {
  const { id } = useParams();
  const user = usersData.find(user => user.id === parseInt(id));

  const favorite = useSelector(state => state.favorite.value);
  const dispatch = useDispatch();

  const isFavorite = favorite && favorite.id === user.id;

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
          <p>Name: {user.name}</p>
          <p>Date of Birth: {user.dob}</p>
          <p>Occupation: {user.occupation}</p>
          <button onClick={toggleFavorite}>
            {isFavorite ? 'Remove from Favorite' : 'Set as Favorite'}
          </button>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default UserDetails;
