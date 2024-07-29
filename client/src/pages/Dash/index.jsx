import { useSelector } from "react-redux";
import { idSLCT } from "../../features/userSlice";
import AccountCard from "../../component/AccountCard";
import Navbar from "../../component/Navbar";
import styled from "styled-components";
import EditNameForm from "../../component/EditNameForm";
import React from "react";
import Footer from "../../component/Footer";

import "../../utils/style/dash.css";

const accountData = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: 2082.79,
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: 10928.42,
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x8349)",
    amount: 184.3,
    description: "Current Balance",
  },
];

const Dash = () => {
  const user = useSelector(idSLCT); 
  return (
    <React.StrictMode>
      <Navbar />
      <Container>
        <div>
          <h1 className="whiteTxt">
            Welcome back <br />
            {`${user.firstName} ${user.lastname} !`}
          </h1>
          <br />
          <EditNameForm token={user.token} />
        </div>
        <section>
          {accountData.map((account, index) => {
            return (
              <AccountCard
                title={account.title}
                amount={account.amount}
                description={account.description}
              />
            );
          })}
        </section>
      </Container>
      <Footer />
    </React.StrictMode>
  );
};

const Container = styled.div`
  min-height: calc(100vh);
  justify-content: center;
  background-color: #12002b;
  padding: 90px 0;
  margin-bottom: -70px;
`;

export default Dash;
