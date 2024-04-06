import classes from "@styles/header/header.module.scss";
export const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <div className={classes.logo}></div>
        <ul className={classes.list}>
          <li>sui</li>
        </ul>
        <div className={classes.buttonContainer}>
          {/* <UploadItemButton />
          <ProfileButton />
          <QuestionButton />
          <CartButton /> */}
        </div>
      </nav>
    </header>
  );
};
