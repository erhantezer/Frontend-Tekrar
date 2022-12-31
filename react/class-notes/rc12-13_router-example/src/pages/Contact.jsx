

const Contact = () => {

  return (
    <div className="container">
      <h1 className="text-center mt-4">CONTACT FORM</h1>
      <form >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            
            
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            
            
          />
        </div>
        <div className="text-center">
          <button className="btn btn-danger mb-4">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact