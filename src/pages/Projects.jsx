import React from 'react';
import '../Projects.css';
import Cards from '../Components/Cards';
import Ecommerce from "../assets/Ecommerce.png"
import Passage from "../assets/Passage.png"
import Weather from "../assets/Weather.png"
import ProjectVideo from "../assets/ProjectVideo.mp4";

const Projects = () => {
  const projects = [
    {
      img: Ecommerce,
      title: "Ecommerce Web Application",
      description: "A dynamic shopping platform created with React.js and Tailwind CSS, ensuring a seamless user experience with modern UI components.",
      technologies: ["React", "TailwindCSS"],
      githubLink: "https://github.com/manavjain2003/Ecommerce-Website",
      liveLink: "https://incomparable-speculoos-27e968.netlify.app/"
    },
    {
      img: Weather,
      title: "Weather Application",
      description: "A responsive weather app with real-time data integration, featuring intuitive design and seamless API connectivity for accurate forecasts.",
      technologies: ["HTML", "CSS", "Javascript", "API"],
      githubLink: "https://github.com/manavjain2003/Weather-Application",
      liveLink: "https://weatherapplication2025.netlify.app/"
    },
    {
      img: Passage,
      title: "Passage Consultants",
      description: "A freelance-built, responsive web application for consultancy services, developed using React and CSS. It features an intuitive interface for seamless client-consultant interaction, leveraging React's dynamic components and custom CSS for a polished, mobile-friendly design.",
      technologies: ["React", "CSS"],
      githubLink: "https://github.com/manavjain2003/PassageConsultants",
      liveLink: "https://whimsical-kringle-134496.netlify.app/"
    }
  ];
 
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* Enhanced Video Background */}
        <div className="video-wrapper">
          <video autoPlay muted loop className="project-video">
            <source src={ProjectVideo} type="video/mp4" />
            Your browser does not support the video.
          </video>
          <div className="video-overlay"></div>
        </div>

        {/* Enhanced Header Section */}
        <div className="projects-header">
          <div className="header-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
          </div>
          <h2 className="section-title">
            <span className="title-gradient">My Projects</span>
          </h2>
          <p className="section-subtitle">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card-wrapper" data-index={index}>
              <Cards {...project} />
            </div>
          ))}
        </div>

        {/* Floating Elements for Visual Appeal */}
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-triangle triangle-1"></div>
          <div className="floating-triangle triangle-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;