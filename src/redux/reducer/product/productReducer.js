import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { productsList: [] };

export const productSlice = createSlice({
  name: 'product',
  initialState: { value: initialStateValue },
  reducers: {
    productReducer: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { productReducer } = productSlice.actions;

export default productSlice.reducer;
