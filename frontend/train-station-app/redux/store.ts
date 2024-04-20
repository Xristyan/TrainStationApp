import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import modalReducer from './modal/modalSlice';

export const store = configureStore({
  reducer: {
    authReducer,
    modalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
