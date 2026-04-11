import "./Navbar.css";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">TW</h2>

      <ul className="menu">
        <li className="active">Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="right">
        <div className="icons">
          <FaFacebookF />
          <FaGithub />
          <FaLinkedinIn />
          <FaTwitter />
        </div>

        <button className="btn">BUY NOW</button>
      </div>
    </nav>
  );
}

export default Navbar;