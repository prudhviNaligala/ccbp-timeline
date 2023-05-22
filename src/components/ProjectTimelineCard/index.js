import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {data} = props
  console.log(data)
  const {description, imageUrl, projectTitle, projectUrl, duration} = data

  return (
    <div className="project-container">
      <img className="pic" src={imageUrl} alt="PROJECT" />
      <div className="project-details">
        <div>
          <h1>{projectTitle}</h1>
        </div>
        <div>
          <p>
            <AiFillCalendar />
            {duration}
          </p>
        </div>
      </div>
      <p>{description}</p>
      <div>
        <a className="anchor" href={projectUrl}>
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimeLineCard
