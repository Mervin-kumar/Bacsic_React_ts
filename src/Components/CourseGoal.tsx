import React, { FC, PropsWithChildren} from 'react';
type CourseGoalProps=PropsWithChildren<{Title:string,onDelete:(id:number)=>void,id:number}>

const CourseGoal :FC<CourseGoalProps> = ({ Title,children,onDelete,id}) => {
 

  return (
    <article>
      <div >
        <h2>{Title}</h2>
        {children}
        <button onClick={()=>onDelete(id)}>Delete</button>
      </div>
    </article>
  );
};

export default CourseGoal;
