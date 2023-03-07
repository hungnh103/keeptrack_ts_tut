import { Project } from './Project'

interface ProjectCardProps {
  project: Project,
  onEdit: (project: Project) => void
}

const formatDescText = (desc: string): string => (`${desc.slice(0, 60)}...`)

const ProjectCard = ({ project, onEdit }: ProjectCardProps) => {
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited)
  }

  return (
    <div className='card'>
      <img src={project.imageUrl} alt={project.name} />
      <section className='section dark'>
        <h5 className='strong'>
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescText(project.description)}</p>
        <p>Budget: {project.budget.toLocaleString()}</p>

        <button
          className='bordered'
          onClick={() => {
            handleEditClick(project)
          }}
        >
          <span className='icon-edit'></span>
          Edit
        </button>
      </section>
    </div>
  )
}

export default ProjectCard
