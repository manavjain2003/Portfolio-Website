import React from "react"
import "../Footer.css"
import Git from "../assets/Git.png"
import facebook from "../assets/facebook.png"
import insta from "../assets/insta.png"
import linkdln from "../assets/linkdln.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <a href="https://github.com/manavjain2003" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub Profile">
          <img src={Git} alt="GitHub" />
        </a>
        <a href="https://www.facebook.com/manav.jain.5201" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook Profile">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/manavjain_3000/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram Profile">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/manav-jain-b950a9264" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn Profile">
          <img src={linkdln} alt="LinkedIn" />
        </a>
      </div>
      <p className="para">© 2025 Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer