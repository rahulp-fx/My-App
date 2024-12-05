import React from 'react'

const Contact = () => {
  return (
    <div>
      <form>
        
        <label>Username:</label>
        <input type='text' placeholder='enter Username'/><br/><br/>
        <label>Password:</label>
        <input type='password' placeholder='enter Password'/><br/><br/>
        <label>Email:</label>
        <input type='email' placeholder='enter Email'/><br/><br/>
        <label>Mobile Number:</label>
        <input type='tel' placeholder='enter Mobile'/><br/><br/>
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Contact
