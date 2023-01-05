import { createContext, useContext, useEffect, useState } from "react"

//? 1- Defining (Tanımlama Oluşturma)
export const UserContext = createContext();


//? 3-Consume function (Custom Hook) (tüketme için custome hook yazdık)
export const useUserContext = () => {
    return useContext(UserContext)
}

//? 2- Provider Component (Sarmalama)
const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then((result) => result.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    }, [])
    
    const changeWidth = (id, width) => {
        setUsers(
            users.map((user) => (user.id ===id ? {...user, width: width} : user))
            );
    }

    const values = { users, changeWidth }
  return (
    <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider