import '../Cards.css';
import { useState } from 'react';

const Cards = ({ img, title, description, technologies, githubLink, liveLink }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="project-card">
      {/* Enhanced Image Section */}
      <div className="project-image-container">
        <div className="image-wrapper">
          {!imageError ? (
            <img 
              src={img} 
              alt={title}
              className={`project-image ${imageLoaded ? 'loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="image-placeholder">
              <div className="placeholder-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="placeholder-text">Project Image</span>
            </div>
          )}
        </div>
        <div className="card-shine"></div>
      </div>

      {/* Enhanced Content Section */}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">
            <span className="title-text">{title}</span>
            <div className="title-underline"></div>
          </h3>
        </div>

        <p className="project-description">{description}</p>

        {/* Enhanced Technologies Section */}
        <div className="project-technologies">
          <div className="tech-label">Built with:</div>
          <div className="tech-tags">
            {technologies.map((tech, i) => (
              <span key={i} className="tech-tag">
                <span className="tech-icon">⚡</span>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced Links Section */}
        <div className="project-links">
          {githubLink && (
            <a 
              href={githubLink} 
              className="project-link github-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View Code</span>
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              className="project-link live-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
              </svg>
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="card-decorations">
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
      </div>
    </div>
  );
};

export default Cards;