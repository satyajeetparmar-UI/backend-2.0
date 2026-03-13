import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e)
  }

  return (

    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' id='username' placeholder='Enter username' />
          <input type="email" name="email" id="email" placeholder='Enter email' />
          <input type="password" name='password' id='password' placeholder='Enter password' />
          <button className='button primary-button'>Register</button>
          <p>Already have an account? <Link to={"/Login"} >Login</Link> </p>
        </form>
      </div>
    </main>
  )
}

export default Register