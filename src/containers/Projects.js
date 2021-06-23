import ProjectCard from '../components/ProjectCard.js'
import projects from '../data/projects.js'

const Projects = () => {
    
    const displayProjects = (type) => {
        return projects[type].map(project => {
            return <ProjectCard name={project.name} github={project.github} website={project.link} description={project.description} images={project.images}/>
        })
    }

    return (
        <div className="projects-container">
            <div className="web-projects">
                {displayProjects('webProjects')}
            </div>
        </div>
    )
}

export default Projects