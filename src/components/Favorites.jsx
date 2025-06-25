import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, addFavorite } from '../slices/favoriteSlice';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Favorites() {
  const favorite = useSelector(state => state.favorite.value);

  return (
    <div>
      <h2>Favorite User</h2>
      {favorite ? (
        <div>
          <Link to={`/user/${favorite.id}`}>{favorite.name}</Link>
        </div>
      ) : (
        <p>No favorite user selected</p>
      )}
    </div>
  );
}

export default Favorites;
