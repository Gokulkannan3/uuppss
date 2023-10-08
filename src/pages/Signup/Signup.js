import React from 'react'
import { Link } from 'react-router-dom'
import google from "../../components/images/google.png"
import facebook from "../../components/images/facebook.png"
import amazon from "../../components/images/amazon.png"
import apple from "../../components/images/apple-logo.png"
import twitter from "../../components/images/twitter.png" 
import Navbar from "../Navbar";
import Footer from "../Footer"
export default function Sign() {
  return (
    <div>
        <div className="fixed top-0 left-0 w-full">
            <Navbar/>
        </div>
      <div className=' mx-auto w-1/3 h-1/2 mt-28'>
        <h1 className='text-5xl font-semi-bold items-start font-sans'>Sign Up</h1>
        <p className='text-yellow-400 text-5xl first-5xl -translate-y-7'>____</p>
        <p className=' items-start font-sans	'>Already have a Profile?<Link to='/Sign' className='underline underline-sky-500  text-blue-700 hover:text-blue-500'> Log In</Link></p>
        <form className='mt-2'>
          <input type="text" name='Username' placeholder='  First and Lastname' className='border border-black rounded-sm h-14 w-full' />
          <input type="text" name='Username' placeholder='  Email' className='border border-black rounded-sm h-14 w-full mt-4' />
          
  
        <div className="flex space-x-4 mt-4 h-14">
        
        <select className="w-24 px-3 py-2 border border-black rounded-sm">
            <option value="+1">+1</option>
            <option value="+44">+44</option>
        
        </select>

        
        <input type="text" className="flex-grow px-3 py-2 border border-black rounded-sm" placeholder="Phone Number" />
        </div>


                <input type="text" name='Username' placeholder='  Username' className='border border-black rounded-sm h-14 w-full mt-4' />
                <input type="text" name='Username' placeholder='  Password' className='border border-black rounded-sm h-14 w-full mt-4' />
                

                </form>
                <h1 className='mt-4 font-semibold'>Send me offers, insights and industry news that can help to improve my shipping.</h1>
                <div className='flex flex-col mt-4'>
                <label>
                <input type="radio" name="options" value="option1" />
                    Yes, send me these emails. I know I can change this selection in my profile at any time.
                </label>

                <label>
                <input type="radio" name="options" value="option2" className='mt-3' />
                    No, thanks.
                </label>
                </div>
                <h1 className='mt-4 font-semibold'>Or sign up using one of these sites.</h1>
                <div className='mt-2 space-x-7 mb-5'>
                    <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={google} alt="sample" className='w-6 h-6' /></button>
                    <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={facebook} alt="sample" className='w-6 h-6' /></button>
                    <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={amazon} alt="sample" className='w-6 h-6' /></button>
                    <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={apple} alt="sample" className='w-6 h-6' /></button>
                    <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={twitter} alt="sample" className='w-6 h-6' /></button>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

