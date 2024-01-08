import React, { FormEvent, useRef } from 'react'
type newGoalProps={
   onAddGoal:(goal:string,summary:string)=>void
}

const NewGoal = ({onAddGoal}:newGoalProps) => {
    const goal=useRef<HTMLInputElement>(null);
    const summary=useRef<HTMLInputElement>(null);
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event?.preventDefault()
        const enteredGoal=goal.current!.value;
        const enteredSummary=summary.current!.value;
        event.currentTarget.reset()
        onAddGoal(enteredGoal,enteredSummary)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">YOUR GOAL</label>
                <input type="text" id='goal'ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">SHORT SUMMARY</label>
                <input type="text" id='summary'ref={summary} />
            </p>
            <p>
            <button>ADD GOAL</button>
            </p>
        </form>
    </div>
  )
}

export default NewGoal