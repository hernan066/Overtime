import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface uiState {
  cartSideBar: boolean;
  searchSideBar: boolean;
}

const initialState: uiState = {
  cartSideBar: false,
  searchSideBar: false,
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
    openSearch: (state) => {
      state.searchSideBar = true;
    },
    closeSearch: (state) => {
      state.searchSideBar = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openCart, closeCart, openSearch, closeSearch } = uiSlice.actions;

export default uiSlice.reducer;
