import { useState } from "react"
import Header from "../components/Header"
import ShowTask from "../components/ShowTask"


const Home = () => {
  const [tasks, setTasks] = useState()

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks}/>
      <ShowTask/>
    </div>
  )
}

export default Home