import { configureStore } from '@reduxjs/toolkit';
import userStore from 'redux/reducer/user/userReducer';
import productStore from 'redux/reducer/product/productReducer';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    userStore,
    productStore,
  },
});
