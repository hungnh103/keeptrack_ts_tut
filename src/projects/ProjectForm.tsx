interface ProjectFormProps {
  onCancel: () => void
}

const ProjectForm = ({ onCancel }: ProjectFormProps) => {
  return (
    <form className='input-group vertical'>
      <label htmlFor="name">Project name</label>
      <input type="text" name='name' placeholder='enter name' />

      <label htmlFor="description">Description</label>
      <textarea name="description" placeholder='enter description'></textarea>

      <label htmlFor="budget">Budget</label>
      <input type="number" name='budget' placeholder='enter budget' />

      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name='isActive' />

      <div className='input-group'>
        <button className='primary bordered medium'>Save</button>
        <span></span>
        <button
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
