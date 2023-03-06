import { MOCK_PROJECTS } from './MockProjects'
import ProjectList from './ProjectList'

const ProjectsPage = () => {
  console.log('print to console', MOCK_PROJECTS)

  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  )
}

export default ProjectsPage
