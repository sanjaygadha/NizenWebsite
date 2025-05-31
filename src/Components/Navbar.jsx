import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.jpeg'; // Placeholder for logo image
import "../Styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logoImage} alt="Nizen Lifesciences Logo" className="logo-image" />
      </Link>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        <li><Link to="/career" onClick={toggleMenu}>Careers</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;