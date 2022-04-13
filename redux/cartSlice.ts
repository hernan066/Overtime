import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "../interfaces/cart";

export interface uiState {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

const initialState: uiState = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.numberOfItems = state.numberOfItems + 1;
      state.subTotal = state.subTotal + action.payload.totalPrice;
      state.total = state.subTotal + state.tax;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;

      state.numberOfItems = state.numberOfItems + 1;

      const totalPrice = state.cart.reduce((acc, cur) => {
        return acc + cur.totalPrice;
      }, 0);

      state.subTotal = totalPrice;
      state.total = state.subTotal + state.tax;
    },

    deleteProduct: (state, action: PayloadAction<ICartProduct>) => {
      state.cart = state.cart.filter(
        (product) =>
          !(
            product._id === action.payload._id &&
            product.size === action.payload.size
          )
      );

      const numberOfItems = state.cart.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);

      state.numberOfItems = numberOfItems;
      state.subTotal = state.subTotal - action.payload.totalPrice;
      state.total = state.subTotal + state.tax;
    },

    loadCookies: (state, action) => {
      state.cart = action.payload;

      const numberOfItems = state.cart.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);

      state.numberOfItems = numberOfItems;

      const totalPrice = state.cart.reduce((acc, cur) => {
        return acc + cur.totalPrice;
      }, 0);

      state.subTotal = totalPrice;
      state.total = state.subTotal + state.tax;
    }
  },
});

export const { addToCart, deleteProduct, updateCart, loadCookies } = cartSlice.actions;

export default cartSlice.reducer;
