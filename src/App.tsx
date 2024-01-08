import React, { useState } from 'react';
import CourseGoal from "./Components/CourseGoal";
import Header from './Components/Header';
import CourseGoalList from './Components/CourseGoalList';
import NewGoal from './Components/NewGoal';
export type CourseGoal={
  id:number,
  Title:string,
  Description:string
}
function App() {
  const [goals,setGoals]=useState<CourseGoal[]>([])
  const handleRemove=(id:number)=>{
    setGoals(prevGoal=>prevGoal.filter(goal=>goal.id!==id))

  }
  const HandleGoals=(goal:string,summary:string)=>{
setGoals((prevGoal)=>{
  const newGoal={
    id:Math.random(),
    Title:goal,
    Description:summary
  }
  return [...prevGoal,newGoal]
})
  }
  const bodyStyle: React.CSSProperties = {
    backgroundColor: 'gray',
    marginRight: '4%', 
    marginLeft: '3%', 
    height: '300px',
    fontWeight: 'bold',
    color: 'black', 
  };
  return (
    <div style={bodyStyle}>
      <Header image={{ src: process.env.PUBLIC_URL + '/download.png', alt: "list of goals"  }}>
        <h1>Your Course Goal</h1>
      </Header>
     <NewGoal onAddGoal={HandleGoals} />
      <CourseGoalList  goals={goals} onDeleteGoal={handleRemove} />
    </div>
  );
}

export default App;
