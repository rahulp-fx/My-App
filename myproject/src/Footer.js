import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <p className='Footer'>© 2024, All right reserved | EDUQUIRK INNOVATIONS PRIVATE LIMITED  <Link to="https://www.youtube.com" target='{_blank}'><i class="fa-brands fa-youtube"></i></Link>
      </p>
    </div>
  )
}

export default Footer
