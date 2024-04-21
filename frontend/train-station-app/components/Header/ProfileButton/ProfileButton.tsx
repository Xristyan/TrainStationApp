import classes from '@styles/header/_profile-button.module.scss';
import { ProfileIcon } from '@/components/icons/ProfileIcon/ProfileIcon';
import Link from 'next/link';
import useAuth from '@/hooks/use-auth';
import useModal from '@/hooks/use-modal';
import { isLogged } from '@/utils/auth';

const ProfileButton = () => {
  const loggedIn = isLogged();
  const { openModal } = useModal();
  const { logout } = useAuth();

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
            <label>xristian</label>
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
