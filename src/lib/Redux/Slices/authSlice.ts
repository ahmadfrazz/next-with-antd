import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    id?: string;
    name?: string;
    email?: string;
  };
}

const initialState: AuthState = {
  user: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
