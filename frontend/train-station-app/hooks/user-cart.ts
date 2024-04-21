import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AppDispatch } from "@/redux/store";
import useHttp from "./use-http";
import { Cart } from "@/types/cart";
import {
  setCart,
  addToCart as addToCartSlice,
  removeFromCart as removeFromCartSlice,
  deleteFromCart as deleteFromCartSlice,
} from "@/redux/auth/authSlice";

export default function useCart() {
  const dispatch = useAppDispatch<AppDispatch>();
  const { requestHandler, error } = useHttp();
  const cart = useAppSelector((state) => state.authReducer.user.cart);
  const user = useAppSelector((state) => state.authReducer.user);

  function handleGetCartSucces(data: Cart[]) {
    dispatch(setCart(data));
  }

  function handleAddToCartSuccess(data: Cart) {
    dispatch(addToCartSlice(data));
  }

  function handleRemoveFromCartSuccess(data: Cart) {
    dispatch(removeFromCartSlice(data));
  }

  function handleDeleteFromCartSuccess(data: string) {
    dispatch(deleteFromCartSlice(data));
  }

  function getCart() {
    // TODO: get user cart

    requestHandler(
      {
        url: "http://localhost:8080/user/getUserBy/email",
        body: { email: user.email },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      },
      handleGetCartSucces
    );
  }

  function addToCart() {
    // TODO: add to cart
  }

  function removeFromCart() {
    // TODO: remove from cart
  }

  function getCartLength(): number {
    return cart.reduce(
      (prevCartItem: number, cartItem: Cart) =>
        prevCartItem + cartItem.quantity,
      0
    );
  }

  return { cart, getCart, addToCart, removeFromCart, getCartLength, error };
}
