import React from 'react'
import logo from './images/logo.webp'
import "./About.css"

const About = () => {
  return (
    <div>
      <h3>About My Job Grow</h3>
      <h4>Helping You Grow with New Skills</h4>
      <img src={logo} alt={logo} className="logo"/>
      <p>Welcome to our My Job Grow, where learning knows no bounds! We are a premier digital platform dedicated to providing high-quality educational experiences for learners of all ages and backgrounds. Our mission is to empower individuals to pursue their passions, enhance their skills, and achieve their goals through accessible and engaging online courses.</p>
      
      <p>Whether you’re a lifelong learner seeking personal growth, a professional looking to advance your career, or a student preparing for future success, our Online Academy is here to support your educational journey every step of the way. Join us today and unlock the door to a world of endless learning possibilities!</p>
    </div>
  )
}

export default About
