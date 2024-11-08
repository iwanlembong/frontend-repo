
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authUser',
  initialState: null,
  reducers: {
    setAuthUser: (state, action) => action.payload,
    clearAuthUser: () => null,
  },
});

export const { setAuthUser, clearAuthUser } = authSlice.actions;

const store = configureStore({
  reducer: {
    authUser: authSlice.reducer,
  },
});

export default store;