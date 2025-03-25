import '../Cards.css';

const Cards = ({ img , title, description, technologies, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <img src={img} alt={title} />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={githubLink}>Code</a>
        <a href={liveLink}>Live Demo</a>
      </div>
    </div>
  );
};

export default Cards;