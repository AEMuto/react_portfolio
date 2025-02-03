import { Fragment } from "react";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </Fragment>
  );
};

export default Home;
