import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { fetchingData } from "./userSlice";

export const fetchingUser = async (email, password, dispatch, navigate) => {
  await axios
    .post("http://localhost:3001/api/v1/user/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.status === 200) {
        /**
         * connected is successfully ? search data and navigate : ...
         */
        dispatch(setToken(response.data.body));
        fetchingData(response.data.body.token, dispatch);
        navigate("/account");
      }
    })
    .catch((error) => { 
      navigate("/");
    });
};

const loginSlice = createSlice({
  name: "request",
  initialState: {
    auth: {
      token: null,
      rememberMe: null,
    },
    user: {
      email: null,
      id: {
        firstName: null,
        name: null,
      },
    },
  },
  reducers: {
    setToken: (state, action) => {
      state.auth.token = action.payload.token;
    },
  },
});

export const { setToken } = loginSlice.actions;
export default loginSlice.reducer;

export const selectCurrentToken = (state) => {
  return state.login.auth.token ? true : false;
};
