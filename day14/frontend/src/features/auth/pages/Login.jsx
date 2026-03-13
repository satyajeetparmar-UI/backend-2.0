import React from 'react'
import '../style/form.scss'
import { Link } from 'react-router'

const Login = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault(e)
  }

  return (

    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' id='username' placeholder='Enter username' />
          <input type="password" name='password' id='password' placeholder='Enter password' />
          <button className='button primary-button'>Login</button>
          <p>Don't have an account? <Link to={"/register"} >Register</Link> </p>
        </form>
      </div>
    </main>
  )
}

export default Login