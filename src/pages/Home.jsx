import React from "react";
import Header from "../containers/Home/Header";
import MainImage from "./../containers/Home/MainImage";
import Books from "../components/Home/Books/Books";
import BestSeller from "../containers/Home/BestSeller";
import Complete from "../containers/Home/Complete";
import Select from "../containers/Home/Select";
import FreeButton from "../components/Home/FreeButton/FreeButton";
import ReviewStory from "../components/Home/ReviewStory/ReviewStory";
import Question from "../components/Home/Question/Question";
import Fee from "../components/Home/Fee/Fee";
import ObjectBook from "../components/Home/ObjectBook/ObjectBook";
import Footer from "../containers/Home/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <MainImage />
      <Books />
      <ObjectBook />
      <BestSeller />
      <Complete />
      <Fee />
      <Select />
      <ReviewStory />
      <Question />
      <Footer />
      <FreeButton />
    </>
  );
};

export default Home;
