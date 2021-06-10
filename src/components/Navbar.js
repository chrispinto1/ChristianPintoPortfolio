import React from 'react'

const Navbar = () => {
    return(
        <nav className="navbar-container">
            <h1>Christian Pinto</h1>
            <ul>
                <a href="#about">
                    <li>About Me</li>
                </a>
                <a href="#skills">
                    <li>Skills</li>
                </a>
                <a href="#projects">
                    <li>Projects</li>
                </a>
                <a href="#contact">
                    <li>Contact</li>
                </a>
            </ul>
            <div className="hamburger">
                    <div className="white"></div>
                    <div className="black"></div>
                    <div className="white"></div>
                    <div className="black"></div>
                    <div className="white"></div>
            </div>
            <div className="dropdown-options">
                <ul>
                    <a href="#about">
                        <li>About Me</li>
                    </a>
                    <a href="#skills">
                        <li>Skills</li>
                    </a>
                    <a href="#projects">
                        <li>Projects</li>
                    </a>
                    <a href="#contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar