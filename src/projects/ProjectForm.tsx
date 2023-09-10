import { SyntheticEvent, useState } from 'react'
import { Project } from './Project'
import { useDispatch } from 'react-redux'
import { saveProject } from './state/projectActions'
import { ThunkDispatch } from 'redux-thunk'
import { ProjectState } from './state/projectTypes'
import { AnyAction } from 'redux'

interface ProjectFormProps {
  project: Project,
  onCancel: () => void
}

const ProjectForm = ({
  project: initialProject,
  onCancel,
}: ProjectFormProps) => {
  const [project, setProject] = useState(initialProject)
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    budget: '',
  })

  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>()

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    if (!isValid()) return
    dispatch(saveProject(project))
  }

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target
    let updatedValue = type === 'checkbox' ? checked : value

    if (type === 'number') {
      updatedValue = Number(updatedValue)
    }

    const change = {
      [name]: updatedValue
    }
    let updatedProject: Project
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change })
      return updatedProject
    })
    setErrors(() => validate(updatedProject))
  }

  const validate = (project: Project) => {
    let errors: any = { name: '', description: '', budget: '' }
    if (project.name.length === 0) {
      errors.name = 'Name is required'
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = 'Name needs to be at least 3 characters'
    }
    if (project.description.length === 0) {
      errors.description = 'Description is required'
    }
    if (project.budget === 0) {
      errors.budget = 'Budget must be more than $0'
    }
    return errors
  }

  const isValid = () => {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    )
  }

  return (
    <form
      aria-label='Edit a Project'
      name='projectForm'
      className='input-group vertical'
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Project name</label>
      <input
        id='name'
        aria-label='project name'
        type="text"
        name='name'
        placeholder='enter name'
        value={project.name}
        onChange={handleChange}
      />
      {errors.name.length > 0 && (
        <div className='card error' role='alert'>
          <p>{errors.name}</p>
        </div>
      )}

      <label htmlFor="description">Description</label>
      <textarea
        id='description'
        aria-label='project description'
        name="description"
        placeholder='enter description'
        value={project.description}
        onChange={handleChange}
      ></textarea>
      {errors.description.length > 0 &&(
        <div className='card error' role='alert'>
          <p>{errors.description}</p>
        </div>
      )}

      <label htmlFor="budget">Budget</label>
      <input
        id='budget'
        aria-label='project budget'
        type="number"
        name='budget'
        placeholder='enter budget'
        value={project.budget}
        onChange={handleChange}
      />
      {errors.budget.length > 0 && (
        <div className='card error' role='alert'>
          <p>{errors.budget}</p>
        </div>
      )}

      <label htmlFor="isActive">Active?</label>
      <input
        id='isActive'
        type="checkbox"
        name='isActive'
        checked={project.isActive}
        onChange={handleChange}
      />

      <div className='input-group'>
        <button className='primary bordered medium'>Save</button>
        <span></span>
        <button
          aria-label='cancel'
          type='button'
          className='bordered medium'
          onClick={onCancel}
        >
          cancel
        </button>
      </div>
    </form>
  )
}

export default ProjectForm
