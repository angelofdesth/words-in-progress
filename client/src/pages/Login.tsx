import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col
                    bg-highlight p-4 rounded-2xl
                    border border-accent ">
        <h1>login</h1>
        <p> new here? <Link to="/register">register</Link></p>
        
        <form className="flex flex-col p-4 gap-4">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" /> 
            <button>login</button>
        </form>
    </div>
  )
}

export default Login