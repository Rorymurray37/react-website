
import React from "react";
import HeroImg from "../assets/sparch.jpeg";

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="about">
      <div className="container mx-auto justify-center md:justify-between">
        <div className="about-info ">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>
          <div className="p-5 about-acc rounded-2xl">
            <h4 className ="font-bold">Programming</h4>
            <p className="pb-5">
              An interest and passion for coding in various lanuages built up from my time in college and coding in my own time.
              Specifically I enjoy the areas of AI, data science modelling and web development.
            </p>
            <h4 className ="font-bold">Travelling</h4>
            <p className="pb-5">
              When I have the time I love to travel and see new places with my friends or family.
               Most summers I try to head somewhere new to explore the area and the culture.
            </p>
            <h4 className ="font-bold">Sports</h4>
            <p>
              Sports are a big part of my life.
               I have played football since I was a kid and still currently play both competitively and for fun. I also enjoy running in spare time aswell to keep fit.
               Outside of those two I do occasionally skateboard and ski if at all possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;