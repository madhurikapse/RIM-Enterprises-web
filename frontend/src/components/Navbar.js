import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../style/Navbar.css";
import countries from "../data/countries.json"; // Assuming you have a JSON list of countries

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img src="/assets/logo.jpeg" alt="Logo" className="logo" />
      </Link>

    

      {/* Location Dropdown */}
      <select
        className="location-dropdown"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Location</option>
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {/* Desktop Navigation */}
      <ul className="navbar-links">
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/about">About Us</NavItem>
        <NavItem to="/Contact">Contact</NavItem>
      </ul>

      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <NavItem to="/industries" onClick={() => setIsOpen(false)}>Industries</NavItem>
        <NavItem to="/services" onClick={() => setIsOpen(false)}>Services</NavItem>
        <NavItem to="/problems" onClick={() => setIsOpen(false)}>Important Problems</NavItem>
        <NavItem to="/about" onClick={() => setIsOpen(false)}>About Us</NavItem>
        <NavItem to="/careers" onClick={() => setIsOpen(false)}>Careers</NavItem>
        <NavItem to="/product" onClick={() => setIsOpen(false)}>Product</NavItem>
      </div>
    </nav>
  );
}

// Reusable Nav Item Component
function NavItem({ to, children, onClick }) {
  return (
    <li>
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}
