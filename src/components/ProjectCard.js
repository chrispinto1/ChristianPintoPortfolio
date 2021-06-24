import { useState } from "react"
import ImageSlideShow from "./ImageSlideShow"

const ProjectCard = ({name, builtWith, role, github, website, description, images}) => {
    
    const [viewWebPage, setViewWebPage] = useState(false)

    const displayImages = () => {
            return <ImageSlideShow images={images}/>
    }

    return (
        <div className="project-card">
            <h1>{name}</h1>
            <div className="project-info">
                <a href={github}>{github? 'Github' : 'Private Repo'}</a>
                <span> | </span>
                <a href={website}>Website</a>
            </div>
            <span>
                <p>Role</p>
                <p><i>{role}</i></p>
            </span>
            <span>
                <p>Built With</p>
                <p>{builtWith}</p>
            </span>
            <span>
                <p>Description</p>
                <p className="project-description">{description}</p>
            </span>
            {
                viewWebPage ?
                    displayImages()
                    :
                    <div className="view-image" style={{backgroundImage: `linear-gradient(0deg, rgba(188, 188, 188, 0.5), rgba(188, 188, 188, 0.5)), url(${images[0]})`, backgroundSize: '100% 100%'}}>
                        <button onClick={() => setViewWebPage(true)}>View Images</button>
                    </div>
            }
        </div>
    )
}

export default ProjectCard