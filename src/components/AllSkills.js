import SkillCard from './SkillCard'
import skills from '../data/skills'

const AllSkills = () => {

    const displayLanguages = () => {
        return skills.languages.map(skill => {
            return <SkillCard name={skill.name} fillColor={skill.color} image={skill.image}/>
        })
    }
    return(
        <div className="skills">
            <h1>Languages</h1>
            <div className="languages">
                {displayLanguages()}
            </div>
        </div>
    )
}

export default AllSkills