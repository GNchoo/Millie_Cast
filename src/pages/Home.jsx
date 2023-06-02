import React from "react";
import Header from "../containers/FirstMain/Header/Header";
import MainImage from "../containers/FirstMain/MainImage/MainImg";
import Books from "../containers/FirstMain/Books/Books";
import BestSeller from "../containers/FirstMain/BestSeller/BestBooks";
import Complete from "../containers/FirstMain/Complete/CompleteImg";
import Select from "../containers/FirstMain/Select/Selects";
import FreeButton from "../containers/FirstMain/FreeButton/FreeButton";
import ReviewStory from "../containers/FirstMain/ReviewStory/ReviewStory";
import Question from "../containers/FirstMain/Question/Question";
import Fee from "../containers/FirstMain/Fee/Fee";
import ObjectBook from "../containers/FirstMain/ObjectBook/ObjectBook";
import Footer from "../containers/FirstMain/Footer/FooterForm";

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
