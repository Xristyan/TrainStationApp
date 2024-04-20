import {
  setUserCredentials,
  logout as logoutSlice
} from '@/redux/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import useHttp from './use-http';

export default function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const { requestHandler } = useHttp();
  const user = useAppSelector((state) => state.authReducer.user);

  async function login(loginData: any) {
    // TODO: add request

    dispatch(setUserCredentials(loginData.email));
  }

  async function logout() {
    // TODO: add request

    dispatch(logoutSlice());
  }

  async function register(registerData: any) {
    // TODO: add request

    dispatch(setUserCredentials(registerData.email));
  }

  return { user, login, logout, register };
}
