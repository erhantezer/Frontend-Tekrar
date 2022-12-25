import { useState } from "react"
import Header from "../components/Header"


const Home = () => {
  const [task, setTask] = useState()

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home