import React from 'react';
import '../Projects.css';
import Cards from '../Components/Cards';
import Ecommerce from "../assets/Ecommerce.png"
import Portfolio from "../assets/Portfolio.png"
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
      liveLink: "https://expert-fishstick-jjrxq7g5gpx9cq966-5173.app.github.dev/"
    },
    {
      img: Weather,
      title: "Weather Application",
      description: "A dynamic shopping platform created with React.js and Tailwind CSS, ensuring a seamless user experience with modern UI components.",
      technologies: ["HTML", "CSS", "Javascript", "API"],
      githubLink: "https://github.com/manavjain2003/Ecommerce-Website",
      liveLink: "https://expert-fishstick-jjrxq7g5gpx9cq966-5173.app.github.dev/"
    },
    {
      img: Portfolio,
      title: "Portfolio Website",
      description: "Developed with React.js and CSS, this portfolio highlights my skills, projects, and creativity in a visually appealing and responsive design.",
      technologies: ["React", "CSS"],
      githubLink: "",
      liveLink: ""
    }
  ];
 
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
      <div className="video-wrapper">
  <video autoPlay muted loop className="project-video">
    <source src={ProjectVideo} type="video/mp4" />
    Your browser does not support the video.
  </video>
</div>
        <h2 className="section-title">My Projects</h2>

        {/* All Details will be iterated here now   */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Cards key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;