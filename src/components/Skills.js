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
            <div>
                <div>
                    <h1>Languages</h1>
                    <div className="languages skill-container">
                        {displaySkills('languages')}
                    </div>
                </div>
                <div>
                    <h1>Frameworks</h1>
                    <div className="frameworks skill-container">
                        {displaySkills("frameworks")}
                    </div>
                </div>
                <div>
                    <h1>Databases</h1>
                    <div className="frameworks skill-container">
                        {displaySkills("databases")}
                    </div>
                </div>
                <div>
                    <h1>Misc</h1>
                    <div className="frameworks skill-container">
                        {displaySkills("misc")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills