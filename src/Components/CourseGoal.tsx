import React, { FC, PropsWithChildren} from 'react';
type CourseGoalProps=PropsWithChildren<{Title:string}>

const CourseGoal :FC<CourseGoalProps> = ({ Title,children}) => {
 

  return (
    <article>
      <div >
        <h2>{Title}</h2>
        {children}
        <button style={{ fontWeight: 'bold' }}>Delete</button>
      </div>
    </article>
  );
};

export default CourseGoal;
