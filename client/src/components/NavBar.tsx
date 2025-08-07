import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className = "h-16 px-8 grid grid-cols-3 items-center bg-highlight border-b-1 border-muted">
        {/* TO DO: want to make the ...'s be animated */}
        <h4 className = "text-left text-accent">words in progress...</h4>
    
        <ul className="justify-self-center flex">
            <li className="mx-2">
                <NavLink to="/">home</NavLink>
            </li>
            <li className="mx-2">
                <NavLink to="/about">about</NavLink>
            </li>
        </ul>

        <NavLink to="/login" className="text-right">log in</NavLink>
    </nav>
  )
}

export default NavBar