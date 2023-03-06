import { Project } from './Project'

interface ProjectCardProps {
  project: Project
}

const formatDescText = (desc: string): string => (`${desc.slice(0, 60)}...`)

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className='card'>
      <img src={project.imageUrl} alt={project.name} />
      <section className='section dark'>
        <h5 className='strong'>
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescText(project.description)}</p>
        <p>Budget: {project.budget.toLocaleString()}</p>
      </section>
    </div>
  )
}

export default ProjectCard
