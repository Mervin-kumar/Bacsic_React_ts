import CourseGoal from "./CourseGoal"
import {type CourseGoal as CGoal} from '../App'
type CourseGoalProps={
    goals:CGoal[];
}
const CourseGoalList = ({goals}:CourseGoalProps) => {

  return (
    <div>
         <ul>
      {goals.map(goal =>(
        <li key={goal.id}>
        <CourseGoal Title={goal.Title}>
        <p>{goal.Description}</p>
      </CourseGoal>
        </li>
        
      ))
}
      </ul>
    </div>
  )
}

export default CourseGoalList