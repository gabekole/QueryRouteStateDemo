import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './slices/favoritesSlice'


export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
})