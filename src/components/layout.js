import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css'; // Import CSS for styling

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img src="/Carlogo.png" alt="Car Logo" className="logo" /> {/* Link to the homepage and display the logo */}
        </Link>
      </nav>
      {children} {/* Render the child components within the layout */}
    </div>
  );
};

export default Layout;
