import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [] // Սկզբնական վիճակում սիրված ֆիլմերի ցուցակը դատարկ է
  },
  reducers: {
    // 1. Ավելացնելու ֆունկցիա
    addFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    // 2. Ջնջելու ֆունկցիա
    removeFavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

// Export ենք անում action-ները, որ էջերում կոճակներին սեղմելիս օգտագործենք
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// Export ենք անում հենց ռեդյուսերը store-ին միացնելու համար
export default favoritesSlice.reducer;