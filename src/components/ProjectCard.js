import { useState } from "react"
import ImageSlideShow from "./ImageSlideShow"

const ProjectCard = ({name, github, website, description, images}) => {
    
    const [viewWebPage, setViewWebPage] = useState(false)

    const displayImages = () => {
            return <ImageSlideShow images={images}/>
    }

    return (
        <div className="project-card">
            <a href={website}>
                <h1>{name}</h1>
            </a>
            <div className="project-info">
                <a href={github}>{github? 'Github' : 'Private Repo'}</a>
                <span> | </span>
                <a href={website}>Website</a>
            </div>
            <p>{description}</p>
            {
                viewWebPage ?
                    displayImages()
                    :
                    <button onClick={() => setViewWebPage(true)}>View Images</button>
            }
        </div>
    )
}

export default ProjectCard