import SkillCard from './SkillCard'
import skills from '../data/skills'

const Skills = () => {

    const displaySkills = (type) => {
        return skills[type].map(skill => {
            return <SkillCard key={skill.name} name={skill.name} fillColor={skill.color} image={skill.image}/>
        })
    }

    return(
        <div className="skills">
            <div className="skill-holder">
                <h1>Languages</h1>
                <div className="languages">
                    {displaySkills('languages')}
                </div>
            </div>
            <div className="skill-holder">
                <h1>Frameworks</h1>
                <div className="frameworks">
                    {displaySkills("frameworks")}
                </div>
            </div>
            <div className="skill-holder">
                <h1>Databases</h1>
                <div className="frameworks">
                    {displaySkills("databases")}
                </div>
            </div>
            <div className="skill-holder">
                <h1>Misc</h1>
                <div className="frameworks">
                    {displaySkills("misc")}
                </div>
            </div>
        </div>
    )
}

export default Skills