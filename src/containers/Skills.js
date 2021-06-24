import SkillsList from '../components/Skills'

const Skills = ({skillsRef, load}) => {
    return(
        <div ref={skillsRef} className="skills-container" id="skills" data-name="skills">
            {
                load &&
                    <div>
                        <h1>Skills</h1>
                        <SkillsList />
                    </div>
            }
        </div>
    )
}

export default Skills