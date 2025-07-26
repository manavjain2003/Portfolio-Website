import "../About.css";
import React, { useState, useEffect } from 'react';

const About = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Add staggered animation for skill boxes
  useEffect(() => {
    const skillElements = document.querySelectorAll('.skills-box');
    skillElements.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => [...prev, index]);
      }, index * 100);
    });
  }, [isVisible]);

  const skills = [
    { 
      category: "Frontend Development", 
      items: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "TypeScript"],
      icon: "🚀",
      description: "Creating engaging, responsive user interfaces with modern frameworks",
      level: 92
    },
    { 
      category: "Backend Development", 
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "SQL"],
      icon: "⚡",
      description: "Building robust, scalable server architectures and APIs",
      level: 88
    },
    { 
      category: "Development Tools", 
      items: ["Git", "GitHub", "VS Code"],
      icon: "🛠️",
      description: "Streamlining development workflow with modern DevOps tools",
      level: 85
    },
    { 
      category: "Design & UX", 
      items: ["Responsive Design", "UI/UX Design", "Figma", "Adobe XD"],
      icon: "🎨",
      description: "Crafting beautiful, intuitive digital experiences",
      level: 90
    }
  ];

  const handleCategoryHover = (index) => {
    setActiveCategory(index);
    
    // Add ripple effect
    const category = document.querySelectorAll('.skills-category')[index];
    if (category) {
      category.classList.add('skills-ripple');
      setTimeout(() => {
        category.classList.remove('skills-ripple');
      }, 600);
    }
  };

  const handleSkillClick = (skillName, categoryIndex) => {
    // Add click animation
    const skillBoxes = document.querySelectorAll(`#category-${categoryIndex} .skills-box`);
    skillBoxes.forEach(box => {
      if (box.textContent === skillName) {
        box.classList.add('skills-clicked');
        setTimeout(() => {
          box.classList.remove('skills-clicked');
        }, 300);
      }
    });
  };

  return (
    <section id="skills" className="skills-main-section">
      {/* Background Particles */}
      <div className="skills-background-particles">
        <div className="skills-particle skills-particle-1"></div>
        <div className="skills-particle skills-particle-2"></div>
        <div className="skills-particle skills-particle-3"></div>
        <div className="skills-particle skills-particle-4"></div>
        <div className="skills-particle skills-particle-5"></div>
      </div>

      <div className="skills-main-container">
        {/* Enhanced Header */}
        <div className={`skills-main-header ${isVisible ? 'skills-visible' : ''}`}>
          <div className="skills-section-badge">
            <span style={{color: "#00d4ff", position: "relative", zIndex: 2}}>What I Do</span>
          </div>
          <h2 className="skills-main-title">Skills & Expertise</h2>
          <p className="skills-main-subtitle">
            I specialize in building modern, scalable web applications with a focus on 
            performance, user experience, and clean, maintainable code architecture.
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className={`skills-main-grid ${isVisible ? 'skills-visible' : ''}`}>
          {skills.map((group, index) => (
            <div 
              key={index} 
              id={`category-${index}`}
              className={`skills-category ${activeCategory === index ? 'skills-active' : ''}`}
              onMouseEnter={() => handleCategoryHover(index)}
              onMouseLeave={() => setActiveCategory(null)}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Category Header */}
              <div className="skills-category-header">
                <div className="skills-category-icon">
                  {group.icon}
                </div>
                <div className="skills-info">
                  <h3 className="skills-category-title">{group.category}</h3>
                  <p className="skills-description">{group.description}</p>
                </div>
              </div>

              {/* Enhanced Skill Items */}
              <div className="skills-items">
                {group.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="skills-box"
                    onClick={() => handleSkillClick(skill, index)}
                    style={{
                      animationDelay: `${(index * 0.2) + (idx * 0.1)}s`
                    }}
                  >
                    <span className="skills-text">{skill}</span>
                    <div className="skills-glow"></div>
                  </span>
                ))}
              </div>

              {/* Card Footer with Enhanced Progress */}
              <div className="skills-card-footer">
                <div className="skills-progress-indicator">
                  <div 
                    className="skills-progress-bar"
                    style={{
                      '--progress-width': `${group.level}%`
                    }}
                  ></div>
                </div>
                <div className="skills-level-text">
                  <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>
                    Proficiency: {group.level}%
                  </span>
                </div>
              </div>

              {/* Category Background Effect */}
              <div className="skills-category-bg-effect"></div>
              
              {/* Category Decorations */}
              <div className="skills-category-decorations">
                <div className="skills-floating-dot skills-dot-1"></div>
                <div className="skills-floating-dot skills-dot-2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Experience Stats */}
        <div className={`skills-main-footer ${isVisible ? 'skills-visible' : ''}`}>
          <div className="skills-footer-stats">
            <div className="skills-stat-item">
              <span className="skills-stat-number">8</span>
              <span className="skills-stat-label">Months Experience</span>
            </div>
            <div className="skills-stat-divider"></div>
            <div className="skills-stat-item">
              <span className="skills-stat-number">5</span>
              <span className="skills-stat-label">Projects Completed</span>
            </div>
            <div className="skills-stat-divider"></div>
            <div className="skills-stat-item">
              <span className="skills-stat-number">10+</span>
              <span className="skills-stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="skills-background-grid">
        <div className="skills-grid-line skills-vertical"></div>
        <div className="skills-grid-line skills-vertical"></div>
        <div className="skills-grid-line skills-horizontal"></div>
        <div className="skills-grid-line skills-horizontal"></div>
      </div>
      
      <div className="skills-floating-elements">
        <div className="skills-floating-shape skills-shape-1"></div>
        <div className="skills-floating-shape skills-shape-2"></div>
        <div className="skills-floating-shape skills-shape-3"></div>
      </div>
    </section>
  );
};

export default About;