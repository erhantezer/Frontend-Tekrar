import { useEffect } from "react";
import { useState } from "react"
import Header from "../components/Header"
import ShowTask from "../components/ShowTask"


const Home = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  console.log(tasks)
  
  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks}/>
      <ShowTask tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default Home