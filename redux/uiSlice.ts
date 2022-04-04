import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface uiState {
  cartSideBar: boolean;
}

const initialState: uiState = {
  cartSideBar: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    openCart: (state) => {
      state.cartSideBar = true;
    },
    closeCart: (state) => {
      state.cartSideBar = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openCart, closeCart } = uiSlice.actions;

export default uiSlice.reducer;
