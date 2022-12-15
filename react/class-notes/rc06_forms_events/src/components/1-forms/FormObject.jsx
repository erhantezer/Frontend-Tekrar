import { useState } from "react"


const FormObject = () => {
  const [formvalue, setFormvalue] = useState({
    name:"",
    email:"",
    password:""
  });



const handleFormvalue = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.id);
    // console.log(e.target.value);
  setFormvalue({...formvalue, [e.target.id]: e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault();
  // const { name, password, email } = formValues;
  alert(`username:${name}
  email:${email}
  password:${password}
  `);
  setFormvalue({
  
  name:"",
  email:"",
  password:""
  
  })
};
const {email, name, password} = formvalue;
  return (
    
    <div>
      <form onSubmit={handleSubmit} className="m-5">
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username <span className="text-danger">: {name}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleFormvalue}
            />
        </div>
        <div className="mb-3">

          <label 
          htmlFor="email" 
          className="form-label">
          Email address <span className="text-danger">: {email}</span>
          </label>
          <input 
          type="email" 
          className="form-control" 
          id="email"
          value={email}
          onChange={handleFormvalue}
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
          onChange={handleFormvalue}
          />

        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default FormObject