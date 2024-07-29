import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, fetchingUser } from "../../features/loginSlice";

import "../../utils/style/form.css";
import styled from "styled-components";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetchingUser(email, password, dispatch, navigate);
  };

  return (
    <Container>
      <section className="sign-in-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username" id="usernameLabel">
              Username
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password" id="passwordLabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" id="formValider">
            Sign In
          </button>
        </form>
      </section>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #12002b;
  padding-top: 70px;
`;
