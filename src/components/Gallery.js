import React, { Component } from "react";
import GradImage from "../assets/graduation_copy.jpg";
import SkiImage from "../assets/skiing_copy.jpg";
import Lisbon from "../assets/Lisbon.JPG";
import LisbonView from "../assets/LisbonView.jpg";
import footyNIBC from "../assets/footy.JPG";
import FootyImage from "../assets/Devon.jpg";
import snowboarding from "../assets/snowboarding.JPG";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Gallery = () => { 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const Images = [
      {
        id: 1,
        src: GradImage,
        alt: "Image 1",
        title: "University Graduation",
        description:
          "",
      },
      {
        id: 2,
        src: snowboarding,
        alt: "Image 2 ",
        title: "Snowboarding in Val Thorens",
        description:
          "",
      },
      {
        id: 3,
        src: Lisbon,
        alt: "Image 2 ",
        title: "Lisbon",
        description:
          "",
      },
      {
        id: 4,
        src: footyNIBC,
        alt: "Image 2 ",
        title: "7v7 Footy",
        description:
          "",
      },
      {
        id: 5,
        src: SkiImage,
        alt: "Image 2 ",
        title: "Skiing in Zell am Zee",
        description:
          "",
      },
      {
        id: 6,
        src: LisbonView,
        alt: "Image 3",
        title: "Lisbon again but with a mate",
        description: 
          "",
      }
    ];

    return (
      <>
        <section className="bg-primary text-white px-5 pb-32" id="about">
          <div className="container mx-auto justify-center md:justify-between">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[210px] border-indigo-600 pb-2">
              More of me </h2>
            <div className="container2 ">
              <Slider {...settings}>
                {Images.map((item) => (
                  <div key={item.id}>
                    <img src={item.src} alt={item.alt} className="imgGallery" />
                    <h2 className="title text-center pt-3 para">{item.title}</h2>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </>
    );
  }

export default Gallery;