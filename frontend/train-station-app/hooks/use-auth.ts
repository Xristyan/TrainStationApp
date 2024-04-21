import {
  setUserCredentials,
  logout as logoutSlice
} from '@/redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AppDispatch } from '@/redux/store';
import useHttp from './use-http';
import useModal from './use-modal';

export default function useAuth() {
  const dispatch = useAppDispatch<AppDispatch>();
  const { requestHandler, error } = useHttp();
  const user = useAppSelector((state) => state.authReducer.user);
  const { closeModal } = useModal();

  const handleSuccess = (data: any) => {
    if (!data) return;
    localStorage.setItem('jwtToken', data.token);
    closeModal();
  };

  async function login(loginData: any) {
    requestHandler(
      {
        url: 'http://localhost:8080/api/auth/authentication',
        body: { email: loginData.email, password: loginData.password },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      handleSuccess
    );

    dispatch(setUserCredentials(loginData.email));
  }

  async function logout() {
    dispatch(logoutSlice());
    localStorage.removeItem('jwtToken');
  }

  async function register(registerData: any) {
    requestHandler(
      {
        url: 'http://localhost:8080/api/auth/register',
        body: { email: registerData.email, password: registerData.password },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      handleSuccess
    );

    dispatch(setUserCredentials(registerData.email));
  }

  return { user, login, logout, register, error };
}
