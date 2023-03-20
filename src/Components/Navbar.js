import './Navbar.css'
import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars , FaTimes} from 'react-icons/fa'
import { click } from '@testing-library/user-event/dist/click'


function Nav() {
  const [icon , setIcon] = useState(false)
  const handleclick = () => {
    setIcon(!icon)
  }
  const closeSideDrawer = () =>{
    setIcon(false)
  }
  return ( 
  <>
  <nav className='navbar'>
    <Link tO = '/' className='nav-logo' onClick={closeSideDrawer}>LOGO</Link>
    <div className='menu-icon' onClick = {handleclick}>
      {
        icon ? <FaTimes className='fa-times' > 

        </FaTimes> : <FaBars className='fa-bars'>

        </FaBars>
      }
    </div>
    <ul className={
      icon ? 'nav-menu active' : 'nav-menu'
    }>
      <li>
        <Link to = '/' className='nav-links' onClick={closeSideDrawer}>Home</Link></li>
      
       <li>
        <Link to = '/about' className='nav-links'onClick={closeSideDrawer}>About</Link></li>
       
       <li>
        <Link to = '/services' className='nav-links'onClick={closeSideDrawer}>Services</Link></li>
       
       <li>
        <Link to = '/contactus' className='nav-links'onClick={closeSideDrawer}>Contact-us</Link></li>
       
       <li>
        <Link to = '/signup' className='nav-links'onClick={closeSideDrawer}>Signup</Link></li>
        
       </ul>
       
      </nav>
    </>
  )
}

export default Nav
