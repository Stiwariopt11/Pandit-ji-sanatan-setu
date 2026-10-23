import React from 'react'
import './Navbar.css'
import { Link, NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <div id="father">
    <div id="navbar">
        <ul id="items">
           


           <li><NavLink to='/'className={({ isActive }) => { return isActive ? "active" : ""; }}>Home</NavLink></li> 


           <li><NavLink to='/book' className={({ isActive }) => { return isActive ? "active" : ""; }}>Book Pooja</NavLink></li> 


           <li><NavLink to='/gallary'className={({ isActive }) => { return isActive ? "active" : ""; }}>Gallery</NavLink></li>



           {/* <li><NavLink to='/admin'className={({ isActive }) => { return isActive ? "active" : ""; }}>Admin</NavLink></li> */}
            
            
            
           <li><NavLink to='/explore'className={({ isActive }) => { return isActive ? "active" : ""; }}>Kundali</NavLink></li>
            
        
            </ul>      
    </div></div>
  )
}

export default Navbar
