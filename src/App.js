import React from 'react';
import "./style.css";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Projects />
    </>
  );
}

export default App;
