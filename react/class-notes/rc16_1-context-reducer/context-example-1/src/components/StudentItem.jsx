import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentContext';

const StudentItem = ({student}) => {
  const {id, name, age, email,color} =student;

  const {changeColor} = useContext(StudentContext)
  return (
    <div
    style={{
    background:color,
    paddingBottom:"2rem",
    paddingTop:"1rem",
    marginBottom: "1rem"
    }}
    >
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>Age: {age}</h3>
      <h3>Color: <input 
      type="text" 
      name='color' 
      value={color} 
      onChange={(e) => changeColor(id,e.target.value)}
      /></h3>
    </div> 
  )
}

export default StudentItem