import React from 'react'

const Footer = () => {
  return (
    <div>
        <nav className="justify-content-center bg-dark p-3 fixed-bottom">
            <p className="text-light text-center fw-bolder">
                Copyright &copy; {new Date().getFullYear()}
            </p>
        </nav>
    </div>
  )
}

export default Footer