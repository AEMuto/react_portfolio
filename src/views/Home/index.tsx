import { Fragment } from "react";
import Hero from "./_Hero";
import About from "./_About";
import Gallery from "./_Gallery";
import Contact from "./_Contact";

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
