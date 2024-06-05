import React from 'react'
import NavItem from '../NavItem/NavItem'

import './NavItems.css'

const NavItems = () => {


  return (
    <ul className="nav-items">
      <NavItem link ="/">Shopping</NavItem>
      <NavItem link ="/Acount" className='account' >Acount</NavItem>
    </ul>
  )
}

export default NavItems
