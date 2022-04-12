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
      state.cart =  action.payload;
      console.log(action.payload);
      state.numberOfItems = state.numberOfItems + 1;
      //revisar estos que quedan null
      state.subTotal = state.subTotal + action.payload.totalPrice;
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
      state.numberOfItems = state.numberOfItems - 1;
      state.subTotal = state.subTotal - action.payload.totalPrice;
      state.total = state.subTotal + state.tax;
    },
  },
});

export const { addToCart, deleteProduct, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
