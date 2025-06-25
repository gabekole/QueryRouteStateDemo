import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    value: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.value = action.payload;
    },
    removeFavorite: (state) => {
      state.value = null;
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer