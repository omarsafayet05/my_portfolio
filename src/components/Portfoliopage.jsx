/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
//import Bot from "../components/Bot";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Hireme from "../components/Hireme";
import Project from "../components/Project";
//import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Contact from "./Contact";

const Portfoliopage = () => {
  return (
    <div className="home_bg">
      {/* <Navbar token={props.token} /> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfoliopage;
// const Portfoliopage = (props) => {
//   return (
//     <div className="home_bg">
//       {/* <Navbar token={props.token} /> */}
//       <Bot />
//       <Hero />
//       <About />
//       <Skills />
//       <Hireme />
//       <Project />
//       <Contact />
//       <Footer />
//     </div>
