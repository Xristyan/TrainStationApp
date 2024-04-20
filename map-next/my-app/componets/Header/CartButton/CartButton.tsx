import Link from "next/link";
import { CartIcon } from "@/componets/icons/CartIcon/CartIcon";
import classes from "@styles/header/_cart-button.module.scss";

const CartButton = (props) => {
  return (
    <Link className={classes.button} href={"/cart"}>
      <span className={classes.amount}>
        <span className={classes.badge}>0</span>
        <CartIcon />
      </span>
    </Link>
  );
};
export default CartButton;
