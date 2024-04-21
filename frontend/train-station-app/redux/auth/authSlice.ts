import { Cart } from '@/types/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  user: {
    email: string;
    cart: Cart[];
    id: number | null;
    card: string | null;
    hasChild: boolean;
    childAge: number | string;
  };
};

const initialState: InitialState = {
  user: {
    email: '',
    cart: [],
    id: null,
    card: null,
    hasChild: false,
    childAge: ''
  }
};

export const auth = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user.email = initialState.user.email;
    },
    setUserCredentials: (
      state,
      action: PayloadAction<{
        email: string;
        cart: Cart[];
        id: number;
        card: string;
      }>
    ) => {
      state.user.email = action.payload.email;
      state.user.cart = action.payload.cart;
      state.user.id = action.payload.id;
      state.user.card = action.payload.card;
    },
    setUserCard: (state, action: PayloadAction<string>) => {
      state.user.card = action.payload;
    },
    setHasChild: (state, action: PayloadAction<boolean>) => {
      state.user.hasChild = action.payload;
    },
    setChildAge: (state, action: PayloadAction<number>) => {
      state.user.childAge = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.user.id = action.payload;
    },
    setCart(state, action: PayloadAction<Cart[]>) {
      state.user.cart = action.payload;
    },
    addToCart(state, actions: PayloadAction<Cart>) {
      const newItem = actions.payload;
      const findItem = state.user.cart.find(
        (element: any) => element.productId === newItem.productId
      );

      if (!findItem) {
        state.user.cart.push({
          productId: newItem.productId,
          productName: newItem.productName,
          imageName: newItem.imageName,
          price: newItem.price,
          quantity: 1
        });
      }

      if (findItem) {
        state.user.cart = state.user.cart.map((item: Cart) => {
          if (item.productId === findItem.productId) {
            item.quantity++;
          }
          return item;
        });
      }
    },
    removeFromCart(state, actions: PayloadAction<Cart>) {
      const newItem = actions.payload;
      const findItem = state.user.cart.find(
        (element: Cart) => element.productId === newItem.productId
      );

      if (!findItem) {
        return;
      }

      if (findItem.quantity === 1) {
        state.user.cart = state.user.cart.filter(
          (item) => item.productId !== findItem.productId
        );
      }

      if (findItem.quantity > 1) {
        findItem.quantity--;
      }
    },
    deleteFromCart(state, actions: PayloadAction<string | number>) {
      state.user.cart = state.user.cart.filter((item) => {
        return item.productId !== actions.payload;
      });
    }
  }
});

export const {
  setUserEmail,
  setUserId,
  setUserCard,
  setCart,
  setHasChild,
  setChildAge,
  logout,
  addToCart,
  deleteFromCart,
  removeFromCart
} = auth.actions;
export default auth.reducer;
