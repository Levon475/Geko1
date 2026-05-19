import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;