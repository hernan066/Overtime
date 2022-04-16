import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";



export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer, 
    user: userReducer, 
   
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;