import React from 'react'

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