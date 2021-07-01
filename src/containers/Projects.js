import ProjectCard from '../components/ProjectCard.js'
import projects from '../data/projects.js'

const Projects = ({projectsRef, load}) => {
    
    const displayProjects = (type) => {
        return projects[type].map(project => {
            return <ProjectCard key={project.name} name={project.name} builtWith={project.builtWith} role={project.role} github={project.github} website={project.link} description={project.description} images={project.images}/>
        })
    }

    return (
        <div ref={projectsRef} className="projects-container content" data-name="projects" id="projects">
            <h1>Web Development Work</h1>
            {
                load &&
                    <div className="projects">
                        {displayProjects('webProjects')}
                    </div>
            }
        </div>
    )
}

export default Projects