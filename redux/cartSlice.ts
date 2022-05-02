import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct, shippingAddress } from "../interfaces/cart";

export interface uiState {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
  shippingAddress?: shippingAddress;

}

const initialState: uiState = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
  shippingAddress: undefined,
};

const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.numberOfItems = state.numberOfItems + 1;
      state.subTotal = state.subTotal + action.payload.totalPrice;
      state.tax = state.subTotal * taxRate;
      state.total = state.subTotal + state.tax;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;

      state.numberOfItems = state.numberOfItems + 1;

      const totalPrice = state.cart.reduce((acc, cur) => {
        return acc + cur.totalPrice;
      }, 0);

      state.subTotal = totalPrice;
      state.tax = state.subTotal * taxRate;
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
      state.tax = state.subTotal * taxRate;
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
      state.tax = state.subTotal * taxRate;
      state.total = state.subTotal + state.tax;
    },

    addAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    orderComplete: (state) => {
      state.cart = [];
      state.numberOfItems = 0;
      state.subTotal = 0;
      state.tax = 0;
      state.total = 0;
     
    }
  },
});

export const { addToCart, deleteProduct, updateCart, loadCookies, addAddress, orderComplete } =
  cartSlice.actions;

export default cartSlice.reducer;
