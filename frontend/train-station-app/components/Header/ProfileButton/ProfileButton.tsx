import classes from '@styles/header/_profile-button.module.scss';
import { ProfileIcon } from '@/components/icons/ProfileIcon/ProfileIcon';
import Link from 'next/link';
const ProfileButton = () => {
  const loggedIn = true;

  return (
    <>
      {loggedIn && (
        <div className={classes.dropdown}>
          <button className={classes.button}>
            <ProfileIcon />
          </button>
          <div className={classes['dropdown-content']}>
            <label>xristian</label>
            <Link href='/profile'>Setting</Link>
            <Link href='/'>Logout</Link>
          </div>
        </div>
      )}
      {!loggedIn && (
        <button className={classes.button}>
          <ProfileIcon />
        </button>
      )}
    </>
  );
};
export default ProfileButton;
