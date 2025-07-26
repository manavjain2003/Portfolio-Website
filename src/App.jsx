import React, { useRef } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Hero from './pages/Hero'
import Contact from './pages/Contact'
import "./App.css"

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to sections
  const scrollToSection = (sectionName) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef
    };
    
    const targetRef = refs[sectionName];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      
      <section ref={homeRef} id="home">
        <Hero />
      </section>
      
      <section ref={aboutRef} id="about">
        <About />
      </section>
      
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App