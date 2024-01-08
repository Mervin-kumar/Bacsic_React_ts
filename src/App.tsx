import React, { useState } from 'react';
import CourseGoal from "./Components/CourseGoal";
import Header from './Components/Header';
export type CourseGoal={
  id:number,
  Title:string,
  Description:string
}
function App() {
  const [goals,setGoals]=useState<CourseGoal[]>([])
  const HandleGoals=()=>{
setGoals((prevgoal)=>{
  const newGoal={
    id:Math.random(),
    Title:'Learn React +Typescript',
    Description:'Learn it from the ground up'
  }
  return [...prevgoal,newGoal]
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
      <button onClick={HandleGoals}>Add goal</button>
     
      
    </div>
  );
}

export default App;
