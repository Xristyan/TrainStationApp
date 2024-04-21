import classes from '@styles/header/_profile-button.module.scss';
import { ProfileIcon } from '@/components/icons/ProfileIcon/ProfileIcon';
import Link from 'next/link';
import useAuth from '@/hooks/use-auth';
import useModal from '@/hooks/use-modal';
import { isLogged } from '@/utils/auth';
import { useAppSelector } from '@/redux/hooks';
import { useMemo } from 'react';

function extractUsernameFromEmail(email: string) {
  return email.split('@')[0];
}

const ProfileButton = () => {
  const loggedIn = isLogged();
  const { openModal } = useModal();
  const { logout } = useAuth();
  const xristyan = useAppSelector((state) => state.authReducer.user.email);
  const username = useMemo(
    () => extractUsernameFromEmail(xristyan),
    [xristyan]
  );

  return (
    <>
      {loggedIn && (
        <div className={classes.dropdown}>
          <button
            disabled={loggedIn}
            onClick={openModal}
            className={classes.button}
          >
            <ProfileIcon />
          </button>
          <div className={classes['dropdown-content']}>
            <label>{username}</label>
            <Link href='/profile'>Setting</Link>
            <Link href='/' onClick={logout}>
              Logout
            </Link>
          </div>
        </div>
      )}
      {!loggedIn && (
        <button onClick={openModal} className={classes.button}>
          <ProfileIcon />
        </button>
      )}
    </>
  );
};
export default ProfileButton;
