import {
  setUserEmail,
  logout as logoutSlice,
  setCart,
  setUserId
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

  const handleSuccess = (email: string, data: any) => {
    if (!data) return;
    localStorage.setItem('jwtToken', data.token);

    requestHandler(
      {
        url: 'http://localhost:8080/user/getUserBy/email',
        body: { email: email },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data.token
        }
      },
      (data: any) => {
        dispatch(setCart(data.cart));
        dispatch(setUserId(data.id));
      }
    );

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
      handleSuccess.bind(null, loginData.email)
    );

    dispatch(setUserEmail(loginData.email));
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
      handleSuccess.bind(null, registerData.email)
    );

    dispatch(setUserEmail(registerData.email));
  }

  return { user, login, logout, register, error };
}
