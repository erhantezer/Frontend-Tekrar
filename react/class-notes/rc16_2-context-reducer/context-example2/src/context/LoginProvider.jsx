import { useContext, useState } from "react"
import { createContext } from "react"

//! 1-) Creating Login Context
export const LoginContext = createContext();

//! Consuming Custom Hook
export const useLoginContext = () => {
    return useContext(LoginContext) 
}

//! 2-) Providing
const LoginProvider = ({children}) => {
    const [user, setUser] =useState({
        email: "",
        password: ""
    })
  return (
    <LoginContext.Provider value={{user, setUser}}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider