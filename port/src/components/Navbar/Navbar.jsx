import './Navbar.css'
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

      <button className="btn">BUY NOW</button>
    </nav>
  );
}

export default Navbar;