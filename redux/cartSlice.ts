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
      state.tax = state.tax + (state.subTotal * 0.1);
      state.total = state.subTotal + state.tax;

    },
    updateQuantity: (state, action: PayloadAction<{product: ICartProduct, quantity: number}>) => {
      state.cart = state.cart.map(product => {
        if (product._id === action.payload.product._id) {
          product.quantity = action.payload.quantity;
        }
        return product;
      });
      state.numberOfItems = state.cart.reduce((acc, product) => acc + product.quantity, 0);
      state.subTotal = state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
      state.tax = state.subTotal * 0.1;
      state.total = state.subTotal + state.tax;
      
        
    },
   
  },
});


export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
