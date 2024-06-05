import React from 'react'

import NavItems from '../NavItems/NavItems'

import './Navbar.css'

const Navbar = (props) => {
  return (
    <header className="navbar">
      <nav>
        <NavItems />
      </nav>
    </header>
  )
}

export default Navbar
