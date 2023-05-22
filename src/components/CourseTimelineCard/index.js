import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  const {courseTitle, description, duration} = data

  return (
    <div className="course-container">
      <div className="card-container">
        <div className="card-container-details">
          <div>
            <h1>{courseTitle}</h1>
          </div>
          <div>
            <p>
              <AiFillClockCircle /> {duration}
            </p>
          </div>
        </div>
        <p>{description}</p>
        <ul className="un-order">
          {data.tagsList.map(eachItem => (
            <p className="list" key={eachItem.name}>
              {eachItem.name}
            </p>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CourseTimelineCard
