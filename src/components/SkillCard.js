import React from '../images/skills/react.png'
import { useRef } from 'react'

const SkillCard = ({name, fillColor, image}) => {

    const skillBackRef = useRef(null)
    const skillContentRef = useRef(null)

    const handleHover = () => {
        skillContentRef.current.style.transform = "rotateY(.25turn)"
        setTimeout(function(){
            skillBackRef.current.style.display = "block"
            skillBackRef.current.style.fill = `${fillColor}`
            skillContentRef.current.style.transform = "rotateY(.5turn)"
        }, 1000)
    }

    const handleUnhover = () => {
        skillContentRef.current.style.transform = "rotateY(.25turn)"
        setTimeout(function(){
            skillBackRef.current.style.display = "none"
            skillContentRef.current.style.transform = "rotateY(0turn)"
        }, 1000)
    }

    return(
        <svg key={name} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" className="skill_card" onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
            <g viewBox="0 0 100 100" className="skill_content" ref={skillContentRef}>
                <defs>
                    <pattern id={name === 'Ruby on Rails' ? 'ror' : name} patternUnits="userSpaceOnUse" width="100" height="100" x="0" y="0" >
                        <image href={image} loading="lazy" style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
                    </pattern>
                    <polygon id="hex" points="50 1 95 25 95 75 50 99 5 75 5 25"/>
                </defs>
                <use href="#hex" fill={`url(#${name === 'Ruby on Rails' ? 'ror' : name})`} stroke="0" className="skill_front"/>
                <g ref={skillBackRef} className="skill_back" style={{display: 'none'}}>
                    <use href="#hex" stroke="2"/>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontWeight="bold">{name}</text>
                </g>
            </g>
        </svg>
    )
}

export default SkillCard