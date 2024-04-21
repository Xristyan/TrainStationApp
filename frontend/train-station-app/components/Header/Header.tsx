'use client';
import classes from '@styles/header/_header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ProfileButton from './ProfileButton/ProfileButton';
import CartButton from './CartButton/CartButton';
import { languages } from '@/i18n/settings';
import { Select } from '../common/Select';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import { ChangeEvent, useEffect, useState } from 'react';
import { Locale } from '@/types/museumTypes';
import useModal from '@/hooks/use-modal';
import Modal from '../common/Modal';
import LoginForm from '../Authentication/Login/loginForm';
import RegisterForm from '../Authentication/Register/registerForm';
import { useAppDispatch } from '@/redux/hooks';
import { AppDispatch } from '@/redux/store';
import useHttp from '@/hooks/use-http';
import {
  setCart,
  setUserCard,
  setUserEmail,
  setUserId
} from '@/redux/auth/authSlice';
import { JwtPayload, jwtDecode } from 'jwt-decode';

export const Header = ({ locale }: { locale: Locale }) => {
  const [route, setRoute] = useState(locale);
  const router = useRouter();
  const [loginFormLoaded, setLoginFormLoaded] = useState<boolean>(true);
  const { isModalOpen, closeModal } = useModal();

  const dispatch = useAppDispatch<AppDispatch>();
  const { requestHandler } = useHttp();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      return;
    }

    const { sub: email } = jwtDecode<JwtPayload>(token);

    requestHandler(
      {
        url: 'http://localhost:8080/user/getUserBy/email',
        body: { email: email },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      },
      (data: any) => {
        dispatch(setUserCard(data.card));
        dispatch(setCart(data.cart));
        dispatch(setUserId(data.id));
        dispatch(setUserEmail(data.email));
      }
    );
  }, []);

  const languageChangeHandler = (e: any) => {
    setRoute(e.target.value);
    router.push(`${e.target.value}`);
  };

  function switchForm() {
    setLoginFormLoaded(!loginFormLoaded);
  }

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {loginFormLoaded ? (
            <LoginForm switchForm={switchForm} />
          ) : (
            <RegisterForm switchForm={switchForm} />
          )}
        </Modal>
      )}
      <header className={classes.header}>
        <nav className={classes.navigation}>
          <div className={classes.logo}>
            <Link href={'/'}>
              <Image src={'/logo.png'} alt='Logo' width={40} height={40} />
            </Link>
          </div>

          <ul className={classes.list}></ul>
          <div className={classes.buttonContainer}>
            <div style={{ width: '5rem' }}>
              <Select
                onChange={languageChangeHandler}
                value={route}
                options={languages}
              />
            </div>
            <ProfileButton />
            <CartButton />
          </div>
        </nav>
      </header>
    </>
  );
};
