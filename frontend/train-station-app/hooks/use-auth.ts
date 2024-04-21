import {
  setUserCredentials,
  logout as logoutSlice
} from '@/redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import useHttp from './use-http';
import useModal from './use-modal';

export default function useAuth() {
  const dispatch = useAppDispatch<AppDispatch>();
  const { requestHandler } = useHttp();
  const user = useAppSelector((state) => state.authReducer.user);
  const { closeModal } = useModal();

  const setJwtToken = (data: any) => {
    if (!data) return;
    localStorage.setItem('jwtToken', data.token);
  };

  async function login(loginData: any) {
    try {
      await requestHandler(
        {
          url: 'http://localhost:8080/api/auth/authentication',
          body: { email: loginData.email, password: loginData.password },
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        },
        setJwtToken
      );

      await dispatch(setUserCredentials(loginData.email));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    dispatch(logoutSlice());
    localStorage.removeItem('jwtToken');
  }

  async function register(registerData: any) {
    try {
      await requestHandler(
        {
          url: 'http://localhost:8080/api/auth/register',
          body: { email: registerData.email, password: registerData.password },
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        },
        setJwtToken
      );

      await dispatch(setUserCredentials(registerData.email));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  return { user, login, logout, register };
}

// requestHandler(
//   {
//     url: 'http://localhost:8080/user/getUserBy/email',
//     body: { email: data.email },
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
//     }
//   },
//   userDataHandler
// );

// const userDataHandler = (data: any) => {
//   if (!data) return;
//   dispatch(setUserCredentials(data));
// };
