/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Mohamed Nadjib Taleb",
  title: "Web Developer",
  email: "mn.taleb@esi-sba.dz",
  gitHub: "Nadjib4869",
  instagram: "",
  linkedIn: "mohamed-nadjib-taleb-79598425b",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#1f2833";/*#070436 : best for background, 1A237E :blue, #00FFFF :pistach, #00FF00 :bad green */
const secondaryColor = "";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
