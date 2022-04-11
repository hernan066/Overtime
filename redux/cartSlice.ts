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
    
    /* openCart: (state) => {
      state.cartSideBar = true;
    },
    closeCart: (state) => {
      state.cartSideBar = false;
    },
    openSearch: (state) => {
      state.searchSideBar = true;
    },
    closeSearch: (state) => {
      state.searchSideBar = false;
    }, */
  },
});


export const {  } = cartSlice.actions;

export default cartSlice.reducer;
