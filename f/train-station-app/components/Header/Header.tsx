import classes from "@styles/header/_header.module.scss";
import Image from "next/image";
import Link from "next/link";
import CartButton from "./CartButton/CartButton";
export const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="Logo" width={25} height={25} />
          </Link>
        </div>

        <ul className={classes.list}></ul>
        <div className={classes.buttonContainer}>
          {/* <UploadItemButton />
          <ProfileButton />
          <QuestionButton /> */}
          <CartButton />
        </div>
      </nav>
    </header>
  );
};
