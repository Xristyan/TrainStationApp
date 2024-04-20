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
import { ChangeEvent, useState } from 'react';
import { Locale } from '@/types/museumTypes';
import useModal from '@/hooks/use-modal';

export const Header = ({ locale }: { locale: Locale }) => {
  const [route, setRoute] = useState(locale);
  const router = useRouter();
  const { isModalOpen, openModal, closeModal } = useModal();

  const languageChangeHandler = (e: any) => {
    console.log(e.target.value);
    setRoute(e.target.value);
    router.push(`${e.target.value}`);
  };

  return (
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
  );
};
