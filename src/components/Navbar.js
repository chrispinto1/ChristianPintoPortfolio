import { useState } from 'react'
import Github from '../images/contact/github.png'
import Linkedin from '../images/contact/linkedin.png'

const Navbar = (props) => {

    const handleDropdown = () => {
        const dropdown = props.dropdownRef.current
        if(dropdown.style.display === 'block'){
            dropdown.style.maxHeight = '0'
            const closeDropdown = setTimeout(function(){
                dropdown.style.display = 'none'
                clearTimeout(closeDropdown)
            }, 1000)
            return
        }

        dropdown.style.display = 'block'
        const openDropdown = setTimeout(function(){
            dropdown.style.maxHeight = '220px'
            clearTimeout(openDropdown)
        }, 10)
    }

    return(
        <nav className="navbar-container">
            <h1>Christian Pinto</h1>
            <div className="personal-links">
                <a href="https://github.com/chrispinto1" target="_blank" rel="noreferrer">
                    <img src={Github} alt="Github"/>
                </a>
                <a href="https://www.linkedin.com/in/christian-pinto1/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin"/>
                </a>
                <button className="resume-button" onClick={() => {props.setViewResume(true);document.body.style.overflow = "hidden";}}>
                    R
                </button>
            </div>
            <ul className="options">
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleDropdown}>
                    <div className="white"></div>
                    <div className="black"></div>
                    <div className="white"></div>
                    <div className="black"></div>
                    <div className="white"></div>
            </div>
            <div className="dropdown-options" ref={props.dropdownRef}>
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