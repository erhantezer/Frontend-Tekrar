import { useState } from "react";
import { StudentContext } from "./context/StudentContext";
import StudentList from "./components/StudentList"
import data from "./data";

function App() {
  const [students, setStudents] = useState(data);

  const changeColor = (id, color) => {
    setStudents(
        students.map((student) => student.id ===id ? {...student, color:color} : student)
      )
  }
  return (
    <div >
    {/* 2) Provider sarmalama */}
        <StudentContext.Provider value={{students, changeColor}}>
            <StudentList/>
        </StudentContext.Provider>
    </div>
  );
}

export default App;
