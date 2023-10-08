import React from 'react'
import ups from '../components/images/ups.png'
import user from '../components/images/u.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
          <div className="bg-white ">
          <nav className="bg-white fixed relative h-24 border-2 border-shadow-gray-500">
          <Link to='/'>
            <img src={ups} alt="im" className="translate-y-6 h-14 translate-x-56"/>
          </Link>
            <div  className="h-12 flex justify-end ">
              <Link to='/signup'>
                <img src={user} alt="i" className="mt-4 h-8 -translate-y-12 flex justify-center mr-40 bg-yellow-400 rounded-full"/>
                <p className=" -translate-y-20 ml-12 text-black" >Sign In</p>
              </Link>
            </div>
          </nav>
          
         </div>
       </div>
  )
}
