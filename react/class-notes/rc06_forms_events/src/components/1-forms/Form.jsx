import { useState } from "react"


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  alert(`
  name: ${name}
  email: ${email}
  password: ${password}
  `)
  setEmail("");
  setName("");
  setPassword("");

}

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-5">
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username <span className="text-danger">:{name}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-3">

          <label 
          htmlFor="email" 
          className="form-label">
          Email address <span className="text-danger">:{email}</span>
          </label>
          <input 
          type="email" 
          className="form-control" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>

        <div className="mb-3">

          <label 
          htmlFor="password" 
          className="form-label">
          Password
          </label>
          <input 
          type="password" 
          className="form-control" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Form