import React from 'react'
import {Link} from 'react-router-dom'
import './NavItem.css'

const NavItem = (props) => {
  return (
    <li className="nav-item">
      < Link to = {props.link} className='links'>{props.children}</Link>
    </li>
  )
}

export default NavItem
