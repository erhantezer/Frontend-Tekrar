import { useState } from "react"


const AddTaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = {id:id, task:task, day:day, isDone:false};
    setTasks([...tasks, newTask]);
    setDay("");
    setTask("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-2 form-control">
        <div className="m-3 p-1">
          <label htmlFor="task">Task</label>
          <input
            className="m-1 border-2"
            type="text"
            name="task"
            id="task"
            placeholder="Add Task"
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <div className="p-1 m-3">
          <label htmlFor="day">Day & Time</label>
          <input
            className="m-1 border-2"
            type="date"
            name="day"
            id="day"
            required
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div className="p-1 m-3">
          <button className="btn bg-blue-500 text-white px-3 py-1 rounded-full" type="submit">
            Submit
          </button>
        </div>

      </form>
    </div>
  )
}

export default AddTaskForm