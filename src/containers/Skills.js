import SkillsList from '../components/Skills'

const Skills = ({skillsRef, load}) => {

    return(
        <div ref={skillsRef} className="skills-container content" id="skills" data-name="skills">
            {
                load &&
                    <SkillsList />
            }
        </div>
    )
}

export default Skills