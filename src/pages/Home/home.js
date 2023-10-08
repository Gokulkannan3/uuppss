import React from "react";
import Navbar from "../Navi"
import Footer from '../Footer'
import employee from '../../components/images/empl.png'
import parcel from '../../components/images/pack.jpg'
import emplo from '../../components/images/white.jpg'
import './home.css'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-white ">
    <div>
      <Navbar/>
    </div>
    <div>
        <div className="container w-full">
        <ul className="menu menu-vertical lg:menu-horizontal  rounded-box  text-white  text-2xl translate-x-20 mt-8">
          <li><a href="www.google.com" className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4">Track</a></li>
          <li><a  href="www.google.com"  className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4">Quote</a></li>
          <li><a  href="www.google.com" className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4">Ship</a></li>
          <li><a  href="www.google.com" className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4" >Billing</a></li>
          
        </ul>
        <div></div>
        <div className="relative mt-8 flex">
          <input
            type="text"
            placeholder=" "
            className="rounded-sm text-grey-500 border-grey-200 pl-8 pr-4 py-2 bg-white ml-15 w-1/3"
            id="trackNumberInput"
          />
  <label
    htmlFor="trackNumberInput"
    className="absolute top-2 left-2 text-grey-500 transition-all duration-300 ml-15 align items-center"
  >
    Tracking number
  </label>
  <button className="bg-amber-400 hover:bg-amber-300 rounded-full h-11 w-24 ml-4 text-black font-semibold">Track</button>
  
</div>
<img src={employee} alt="employee" className="float-right -mt-10 w-10 h-10"/>

        <div className="content">
        
        </div>
    </div>
      
    </div>
    <div className="hero  bg-white mt-8">
  <div className="hero-content flex-col lg:flex-row text-left">
    <img src={parcel} alt="pic" className="w-1/2 h-sm rounded-lg shadow-2xl" />
    <div className="ml-10 text-left">
      <h1 className="text-4xl font-semibold text-black">Let's Start Shipping</h1>
      <p className="py-6 text-xl text-black font-normal">You’ve got parcels. We’ll take care of them.</p>
      <button className="bg-amber-400 hover:bg-amber-300 rounded-full h-11 w-24  text-black font-semibold float-left ">Ship now</button>
    </div>
  </div>
</div>
<div className="hero  bg-white mt-8">
  <div className="hero-content flex-col lg:flex-row text-left">
    <div className="mr-10 text-left">
      <h1 className="text-4xl font-semibold text-black w-full">Total Visibility and Control</h1>
      <p className="py-6 text-xl text-black font-normal">Track your sent and incoming parcels, set delivery instructions and get alerts with UPS My Choice®.</p>
      <Link to='/login'>
        <button className="bg-amber-400 hover:bg-amber-300 rounded-full h-11 w-24  text-black font-semibold float-left ">Log In</button>
      </Link>
      <Link to='/Signup'>
        <button className="border-blue-500 border-2 hover:bg-amber-300 rounded-full h-11 w-24  text-blue-500 font-semibold float-left ml-5">Sign Up</button>
      </Link>
    </div>
    <img src={emplo} alt="pic" className="w-1/2 h-sm rounded-lg shadow-2xl" />
  </div>
</div>
    
        <div>
          <Footer/>
        </div>
    
    </div>
    
  );
}

export default Home