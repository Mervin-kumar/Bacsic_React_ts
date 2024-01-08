import CourseGoal from "./CourseGoal"
import {type CourseGoal as CGoal} from '../App'
type CourseGoalProps={
    goals:CGoal[];
    onDeleteGoal:(id:number)=>void;
}
const CourseGoalList = ({goals,onDeleteGoal}:CourseGoalProps) => {

  return (
    <div>
         <ul>
      {goals.map(goal =>(
        <li key={goal.id}>
        <CourseGoal id={goal.id} Title={goal.Title} onDelete={onDeleteGoal}>
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