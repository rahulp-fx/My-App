import React from 'react'
import {Link, link} from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </nav>
  )
}

export default NavBar

