import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './sstyles.css';

function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link to="/"> Home</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/podcast"> podcast page</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/Movies"> movies list</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <div>
      <nav className="nav" style={{ backgroundColor: 'light' }}>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/podcast"> podcast page</Link>
          </li>
          <li>
            <Link to="/Movies"> movies list</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
