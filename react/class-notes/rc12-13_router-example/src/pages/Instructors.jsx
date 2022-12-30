import axios from "axios";
import { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Instructors = () => {
  const [instructors, setInstructors] = useState()
  const navigate = useNavigate()
  const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    try {
      const { data } = await axios.get(url)
      setInstructors(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="container text-center mt-5">
      <h1>INSTRUCTOR LIST</h1>
      <div className="row justify-content-center g-4">
        {instructors?.map((inst) => {
        const { id, name } = inst;
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={id}
            // onClick={() => navigate(`/instructors/${id}`)}
            //! Relative path
            onClick={() => navigate(`${id}`, { state: inst })}
          //? Absolute path
          // onClick={() => navigate(`/instructors/${id}`, { state: inst })}
          >
            <img
            className="border rounded-pill w-25" 
              src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
              alt=""
            />
            <h6>{name}</h6>
          </div>
        )
      })}

      </div>

    </div>
  )
}

export default Instructors