import Link from "next/link";
import classes from "@styles/footer/_footer.module.scss";
import { FaceBookIcon } from "../icons/social/FacebookIcon";
import InstagramIcon from "../icons/social/InstagramIcon/InstagramIcon";
import TwitterIcon from "../icons/social/TwiterIcon/TwiterIcon";
import YoutubeIcon from "../icons/social/YoutubeIcon/YoutubeIcon";
const Footer = () => {
  return (
    <>
      <footer className={classes.footerConatiner}>
        <nav className={classes.socialIcons}>
          <Link href={"/"}>
            <FaceBookIcon />
          </Link>
          <Link href={"/"}>
            <InstagramIcon />
          </Link>
          <Link href={"/"}>
            <TwitterIcon />
          </Link>
          <Link href={"/"}>
            <YoutubeIcon />
          </Link>
        </nav>
        <nav className={classes.footerNav}>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>New</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Contact us</Link>
            </li>
            <li>
              <Link href={"/"}>Our Team</Link>
            </li>
          </ul>
        </nav>
      </footer>
      <div className={classes.footerBottom}>
        <p>
          Copyright &copy;{new Date().getFullYear()}; Designed by{" "}
          <span className={classes.designer}>Hristian</span>
        </p>
      </div>
    </>
  );
};
export default Footer;
