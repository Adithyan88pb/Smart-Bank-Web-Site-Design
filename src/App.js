import React from "react";
import "./App.css";
import Heder from "./Compoentes/Header/Heder";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Serivice from "./Pages/Serivice/Serivice";
import MobileBank from "./Pages/Moblie Bank/MobileBank";
import Features from "./Pages/Features/Features";
import Testimonals from "./Pages/Testimonals/Testimonals";
import Questions from "./Pages/Questions/Questions";
import GetStarted from "./Compoentes/Get started/GetStarted";
import Footer from "./Compoentes/Footer/Footer";

const App = () => {
  return (
    <>
      <Heder />
      <Home />
      <About />
      <Serivice />
      <MobileBank />
      <Features />
      <Testimonals />
      <Questions />
      <GetStarted />
      <Footer />
    </>
  );
};

export default App;
