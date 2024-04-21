import Link from 'next/link';
import { CartIcon } from '@/components/icons/CartIcon/CartIcon';
import classes from '@styles/header/_cart-button.module.scss';
import useCart from '@/hooks/user-cart';

const CartButton = () => {
  const { getCartLength } = useCart();

  return (
    <Link className={classes.button} href={'/cart'}>
      <span className={classes.amount}>
        <span className={classes.badge}>{getCartLength()}</span>
        <CartIcon />
      </span>
    </Link>
  );
};
export default CartButton;
