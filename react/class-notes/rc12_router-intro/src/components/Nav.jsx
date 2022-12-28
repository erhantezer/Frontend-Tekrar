import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-xl text-red-600'>
    
        <ul className='flex gap-4 justify-around p-3 bg-blue-400'>
            <li className='bg-yellow-500 p-1.5 rounded-full'>E.T</li>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/instructors">
                    Instructors
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav