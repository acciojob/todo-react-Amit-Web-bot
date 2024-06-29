
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[task,setTask]=useState("")
  const [todoList, settodoList]= useState([])
  function addTask(){
    index = index+1
    settodoList([{id: index, data: task},...todoList])
    setTask("");
  }
  return (
    <div>
        <input placeholder="Enter the work" value={task} onChange={(e)=>{
      setTask(e.target.value)
        }}></input>
        <button onClick={addTask}>Add the Task</button>
        {todoList.map((task)=>{
          return(<ul>
            <li key={task.id}>{task.data}</li>
            <button onClick={()=>{
            settodoList(todoList.filter(a=>a.id!==task.id))
            }}>Delete</button>
            </ul>
          )
        })}
    </div>
  )
}

export default App
