import React from 'react';
import { Link } from 'react-router-dom';
import 'Navbar.css';

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" href="#">James Geib</Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
        

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" href="index.html">
                        About Me
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="contact.html">
                        Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="portfolio.html">
                            Portfolio
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
);

export default Navbar;