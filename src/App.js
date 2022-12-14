import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5h at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder}: task))
}
//Add Task
const addTask = (task) => {
  console.log(task)
}
//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}  
  return (
    <div className="container">
      <Header/>
      <AddTask onAdd = {addTask}/>
      {tasks.length > 0 ? 
        <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 
        <h5>You currently have no tasks</h5>}
    </div>
  );
}


export default App;
