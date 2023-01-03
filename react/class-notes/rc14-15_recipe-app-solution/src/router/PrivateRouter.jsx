import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const currentUser =JSON.parse(sessionStorage.getItem("user"))
  console.log(currentUser.username)
  return (
    currentUser.username ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRouter