import { useState } from "react"

const ProjectCard = ({name, github, website, description}) => {
    
    const [viewWebPage, setViewWebPage] = useState(false)

    return (
        <div className="project-card">
            <a href={website}>
                <h1>{name}</h1>
            </a>
            <div className="project-info">
                <a href={github}>{github? 'Github' : 'Private Repo'}</a>
                <a href={website}>Website</a>
            </div>
            <p>{description}</p>
            {
                viewWebPage ?
                    <iframe src={website}/>
                    :
                    <button onClick={() => setViewWebPage(true)}>View Site</button>
            }
        </div>
    )
}

export default ProjectCard