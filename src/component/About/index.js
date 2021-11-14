import React from "react";

import aboutMe from "../../json/aboutMe.json";

import "./style.css";
const About = () => {
  const content = aboutMe[0];

  return (
    <>
      <article className="aboutMe">
        <h1 className="name">{content.name}</h1>
        <p className="profession">{content.job}</p>
        <p className="description">{content.description}</p>
      </article>
    </>
  );
};

export default About;
