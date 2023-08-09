import React from "react";
import AboutImg from "../assets/graduation_copy.jpg";
import HeroImg from "../assets/sparch.jpeg";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-4 text-white pb-20 pt-40 h-screen" style={{backgroundImage: `url(${HeroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
          }}>
      <div className="container mx-auto grid md:grid-cols-2 md:justify-between">

        {/* items-center justify-center md:justify-between */}

        <div className="hero-info">
          <h1 className="text-2xl lg:text-4xl mt-4  p-2 rounded-2xl">
            Hi, <br />I am Rory Murray<br />
            a software engineer from Galway, Ireland.
          </h1>

        </div>
        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="mr-auto ml-auto rounded-2xl border-4 border-slate-100 border-solid heroimg"
          />
        </div>

      </div>
      <div className="hero-info pb-5 mt-20">
          <div className="flex pl-10 py-5 ml-35">
            <a
              href="https://github.com/Rorymurray37"
              className="pr-4 inline-block hover:text-white"
            >
              {" "}
              <AiFillGithub size={40} />{" "}
            </a>
            <a
              href="https://instagram.com/rorymurray37"
              className="pr-4 inline-block hover:text-white"
            >
              {" "}
              <AiFillInstagram size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/rory-murray-191aa1200/"
              className="pr-4 inline-block hover:text-white"
            >
              {" "}
              <AiFillLinkedin size={40} />{" "}
            </a>
          </div>
      </div>
    </section>
  );
};

export default Hero;