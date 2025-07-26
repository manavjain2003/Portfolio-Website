import "../Hero.css"
import Landing from "../assets/Landing.mp4"

function Hero() {
  return (
    <section className="hero-container">
      <video 
        src={Landing} 
        autoPlay
        muted
        loop
        playsInline
        loading="eager"
        className="hero-video"
      />
      <article className="hero-content">
        <h1 className="hero-heading">Welcome to My Portfolio</h1>
        <h2 className="hero-sub-heading">Hi, My name is Manav Jain</h2>
        <p className="hero-paragraph">
          Enthusiastic React.js developer with a solid foundation in JavaScript, ES6+, and modern frontend
          development practices. Proficient in building responsive, user-friendly web applications using
          React, Redux, and Tailwind CSS. Skilled in integrating APIs and managing state effectively.
          Passionate about writing clean, reusable code and continuously learning new technologies to
          enhance development efficiency.
        </p>
      </article>
    </section>
  )
}

export default Hero