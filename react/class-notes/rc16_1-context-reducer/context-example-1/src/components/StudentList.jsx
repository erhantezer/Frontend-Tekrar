import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentContext';
import StudentItem from './StudentItem';

const SrudentList = () => {
  //! 3) consume tüketme
  //! Context'ten students verisini okuduk.
  const {students} = useContext(StudentContext);
  return (
    <div>
      {students?.map((student) => {
        return(
          <StudentItem key={student.id} student={student}/>
        )
      })}
    </div>
  )
}

export default SrudentList