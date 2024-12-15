import React from 'react';
import Project from './project';
import projects from '../projects.json';
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projectList = projects;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '20px',
  focusOnSelect: 'true',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }
  ]
};

  return (
    <section id="projects">
      <h1>Projects</h1>
      <Slider {...settings}>
        {projectList.map((project, index, link) => (
          <Project key={index} {...project} />
        ))}
      </Slider>
        <br /><br /><br /><br /><hr />
    </section>
  );
};

export default Projects;