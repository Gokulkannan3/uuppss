import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

export default function Footer() {
  return (
    <div className='foot'>
      <footer className="footer p-20 text-neutral-content">
        <nav>
          <header className="footer-title">Services</header> 
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav> 
        <nav className='-translate-x-80'>
          <header className="footer-title">Company</header> 
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav> 
      </footer>
    </div>
  );
}

