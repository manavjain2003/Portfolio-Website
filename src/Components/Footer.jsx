import { Link } from "react-router-dom"
import "../Footer.css"
import Git from "../assets/Git.png"
import facebook from "../assets/facebook.png"
import insta from "../assets/insta.png"
import linkdln from "../assets/linkdln.png"

function Footer() {
  return (
    <footer class="footer">
      <div class="logo">
        <Link to="https://github.com/manavjain2003"> <img src={Git} alt="Github" style={{width:60, alignItems:"center"}} /></Link>
        <Link to="https://www.facebook.com/manav.jain.5201"> <img src={facebook} alt="Instagram" style={{width:60, alignItems:"center"}} /> </Link>
        <Link to="https://www.instagram.com/manavjain_3000/"> <img src={insta} alt="linkdln" style={{width:60, alignItems:"center"}} /> </Link>
        <Link to="www.linkedin.com/in/manav-jain-b950a9264"> <img src={linkdln} alt="Facebook" style={{width:60, alignItems:"center"}} /> </Link>
      </div>
      <p class="para">© 2025 Your Name. All rights reserved.</p>
    </footer>
  )
}
export default Footer