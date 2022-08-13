import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { usersList: [] };

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    userReducer: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { userReducer } = userSlice.actions;

export default userSlice.reducer;
