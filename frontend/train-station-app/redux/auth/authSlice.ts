import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  user: {
    email: string;
  };
};

const initialState: InitialState = {
  user: {
    email: ''
  }
};

export const auth = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user.email = initialState.user.email;
    },
    setUserCredentials: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    }
  }
});

export const { setUserCredentials, logout } = auth.actions;
export default auth.reducer;
