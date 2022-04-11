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
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      state.cart = [...state.cart, action.payload];
      state.numberOfItems = state.numberOfItems + 1;
      state.subTotal = state.subTotal + action.payload.price;
      
      state.total = state.subTotal + state.tax;

     
    },
    updateQuantity: (state,action: PayloadAction<ICartProduct>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
      state.cart = [...state.cart, action.payload];
      const totalQuantity = state.cart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
      
      state.numberOfItems = totalQuantity;
      
      
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
