import React from 'react'

const Navbar = () => {
    return(
        <navbar class="navbar-container">
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
        </navbar>
    )
}

export default Navbar