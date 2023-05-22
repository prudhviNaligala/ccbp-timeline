import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard/index'
import CourseTimelineCard from '../CourseTimelineCard/index'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="app-container">
      <h1>
        MY JOURNEY OF
        <br />
        CCBP 4.0
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          slideShow
          slideItemDuration={4000}
          scrollable={{scrollbar: false}}
          items={timelineItemsList}
          theme={{
            primary: '#2b237c',
            secondary: '#ffffff',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return <CourseTimelineCard key={eachItem.id} data={eachItem} />
            }
            return <ProjectTimelineCard key={eachItem.id} data={eachItem} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
