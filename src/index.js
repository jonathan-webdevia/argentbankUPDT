import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Private from "./component/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/login";
import Dash from "./pages/Dash";

import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/account"
            element={<Private component={<Dash />} />}
          ></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
