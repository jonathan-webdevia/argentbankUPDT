import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice";
import userSlice from "../features/userSlice";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = configureStore(
  {
    reducer: {
      login: loginSlice,
      user: userSlice,
    },
  },
  reduxDevtools
);
 