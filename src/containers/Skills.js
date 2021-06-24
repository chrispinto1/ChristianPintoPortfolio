import { useEffect, useRef } from 'react'
import SkillsList from '../components/Skills'

const Skills = ({skillsRef, load}) => {

    const skillsImgRef = useRef(null)

    useEffect(() => {
        if(load){
            setTimeout(function(){
                skillsImgRef.current.style.transform = 'rotateY(321deg)'
            }, 500)
        }
    }, [skillsImgRef, load])

    return(
        <div ref={skillsRef} className="skills-container content" id="skills" data-name="skills">
            {
                load &&
                    <div>
                        <div className="skills-img-card">
                            <div ref={skillsImgRef} className="skills-img">
                                <span></span>
                            </div>
                        </div>
                        <SkillsList />
                    </div>
            }
        </div>
    )
}

export default Skills