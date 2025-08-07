import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="flex flex-col
                    bg-highlight p-4 rounded-2xl
                    border border-accent ">
        <h1>register</h1>
        <p> have an account? <Link to="/login">login</Link></p>
        
        <form className="flex flex-col p-4 gap-4">
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" /> 
            <input type="password" placeholder="password" /> 
            <button>register</button>
        </form>
    </div>
  )
}

export default Register