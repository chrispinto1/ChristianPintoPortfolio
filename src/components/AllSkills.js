import SkillCard from './SkillCard'
import skills from '../data/skills'

const AllSkills = () => {

    const displayLanguages = () => {
        return skills.languages.map(skill => {
            return <SkillCard name={skill.name} fillColor={skill.color} image={skill.image}/>
        })
    }

    const displayFrameWorks = () => {
        return skills.frameworks.map(skill => {
            return <SkillCard name={skill.name} fillColor={skill.color} image={skill.image} />
        })
    }

    return(
        <div className="skills">
            <div>
                <h1>Languages</h1>
                <div className="languages skill-container">
                    {displayLanguages()}
                </div>
            </div>
            <div>
                <h1>Frameworks</h1>
                <div className="frameworks skill-container">
                    {displayFrameWorks()}
                </div>
            </div>
            <div>
                <h1>Databases</h1>
            </div>
            <div>
                <h1>Misc</h1>
            </div>
        </div>
    )
}

export default AllSkills