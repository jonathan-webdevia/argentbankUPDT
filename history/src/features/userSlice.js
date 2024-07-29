import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchingData = async (token, dispatch) => {
  await axios({
    method: "POST",
    url: "http://localhost:3001/api/v1/user/profile",
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => {
    if (response.status === 200) {
      dispatch(setUserData({ ...response.data.body, token }));
    }
  });
};

export const changeName = async (firstName, lastName, token, dispatch) => {
  console.clear();
  await axios({
    method: "PUT",
    url: "http://localhost:3001/api/v1/user/profile",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: {
      firstName: firstName,
      lastName: lastName,
    },
  }).then((response) => {
    if (response.status === 200) {
      fetchingData(token, dispatch);
    } else {
      console.log(response);
    }
  });
};

const userSlice = createSlice({
  name: "userData",
  initialState: {
    token: null,
    firstName: null,
    lastName: null, 
    email: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.token = action.payload.token;
      state.lastName = action.payload.lastName;
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

export const idSLCT = (state) => {
  return {
    firstName: state.user.firstName,
    lastname: state.user.lastName,
    token: state.user.token,
  };
};
