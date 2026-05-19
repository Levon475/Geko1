import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import { jsonPlaceholderApi } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});