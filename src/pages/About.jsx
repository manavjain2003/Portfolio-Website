import "../About.css";
import React from 'react';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React"] },
    { category: "Backend", items: ["Node.js", "Express"] },
    { category: "Tools", items: ["Git", "GitHub", "Webpack"] },
    { category: "Styling", items: ["Tailwind CSS", "Responsive Design"] }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{group.category}</h3>
              <div className="skill-items">
                {group.items.map((skill, idx) => (
                  <span key={idx} className="skill-box" style={{ animationDelay: `${idx * 0.2}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About