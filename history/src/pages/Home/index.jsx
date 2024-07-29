import React from "react";
import Navbar from "../../component/Navbar";
import Mainhome from "../../component/MainHome";
import Footer from "../../component/Footer";

const Home = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <Mainhome />
      <Footer />
    </React.StrictMode>
  );
};
export default Home;
