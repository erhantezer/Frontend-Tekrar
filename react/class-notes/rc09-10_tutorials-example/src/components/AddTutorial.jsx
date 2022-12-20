import { useState } from "react"


const AddTutorial = ({postAddTutorial}) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState()

const handleSubmit = (e) => {
  e.preventDefault()
  postAddTutorial({title:title, decription:desc})
  setTitle("");
  setDesc("");
}


  
  return (
    <div className="container text-center mt-4">
      <h1>Add Your Tutorial</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter Your Title"
            required
            onClick={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            required
            onClick={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>

    </div>
  )
}

export default AddTutorial