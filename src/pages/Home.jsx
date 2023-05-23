import React from "react";
import Header from "../containers/Header";
import Main from "../containers/Main";
import Books from "../containers/Books";
import BestSeller from "../containers/BestSeller";
import AudioBook from "../components/AudioBook/AudioBook";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Books />
      <AudioBook />
      <BestSeller />
    </>
  );
};

export default Home;
