import React from 'react';
import CourseGoal from "./Components/CourseGoal";
import Header from './Components/Header';
function App() {
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
      <CourseGoal Title='Learn React +Typescript'>
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </div>
  );
}

export default App;
