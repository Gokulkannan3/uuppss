import React from 'react';
import mink from '../../components/images/ext.png'
import { Link } from 'react-router-dom'
import google from "../../components/images/google.png"
import facebook from "../../components/images/facebook.png"
import amazon from "../../components/images/amazon.png"
import apple from "../../components/images/apple-logo.png"
import twitter from "../../components/images/twitter.png" 
import Navbar from "../Navbar";
import Footer from "../Footer"
export default function Login() {
  return (
    <div>
      <Navbar />
      <div className='    mx-auto w-1/3 h-1/2 mt-8 mb-24'>
        <h1 className='text-5xl font-semi-bold items-start font-sans'>Log In</h1>
        <p className='text-yellow-400 text-5xl first-5xl -translate-y-7'>____</p>
        <p className=' items-start font-sans	'>No Profile?<Link to='/Sign' className='underline underline-sky-500  text-blue-700 hover:text-blue-500'> Sign Up</Link></p>
        <form className='mt-2'>
          <input type="text" name='Username' placeholder='  Email or Username' className='border border-black rounded-sm h-14 w-full' />
          

        </form>
        <p className='mt-3 items-start font-sans	flex'>By continuing, I agree to the<Link to='' className='text-blue-700 hover:text-blue-500 underline underline-blue-700 flex ml-2'>  UPS Technology Agreement <img src={mink} alt='sample' className='h-3 ml-2 mt-2 w-3 text-blue-500'/></Link></p>
          <div className='flex flex-row items:center'>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-1 px-4 rounded-3xl w-40 h-8 text-1/2xl mt-3"><Link to='/fetch'>Continue</Link></button>
            <h1 className='translate-y-5 ml-4'>Forgot Username/Password</h1>
          </div>
          <h1 className=" text-1xl font-semibold mt-2" >Or log in using one of these sites</h1>
          <div className='mt-2 space-x-7'>
            <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={google} alt="sample" className='w-6 h-6' /></button>
            <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={facebook} alt="sample" className='w-6 h-6' /></button>
            <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={amazon} alt="sample" className='w-6 h-6' /></button>
            <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={apple} alt="sample" className='w-6 h-6' /></button>
            <button className='rounded-3xl border-2 border-gray-400 p-1'><img src={twitter} alt="sample" className='w-6 h-6' /></button>
          </div>
      </div>
      <Footer/>
    </div>
  );
}
