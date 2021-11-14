import React from "react";
// import ProjectItem from "./ProjectItem";
import projectData from "../../json/allProjects.json";
import "./style.css";
import Slider from "react-slick";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const ProjectItems = () => {
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1
          },
        },
      ],
  };
  
  return (
    <>
      <section className="scene container">
        <Slider {...settings}>
        {projectData.map((data, index) => {
            console.log(index,imageIndex)
            return  <div className={index === imageIndex ? "slide  activeSlide" : "slide"} >
                <img src={data.image} alt=" project-img" />
                <div className="description">
                  
                  <div className="description__text-container">
                    <h1 className="title">{data.title}</h1>
                    <p className="details text">{data.description}</p>
                  </div>
                  <button className="button">
                      <a href={data.link}>
                          View Live
                      </a>
                  </button>
                </div>
              </div>;
            })}
        </Slider>
      </section>
    </>
  );
};

export default ProjectItems;
