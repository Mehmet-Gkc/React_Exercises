import { NavLink, Outlet } from "react-router-dom";

function Parent() {
  return (
    <>
    <div className="navbar">
      <nav>
        <NavLink className="nav-item" to="/">
            Home
        </NavLink>
        <NavLink className="nav-item" to="/childone">
            Child One
        </NavLink>
        <NavLink className="nav-item" to="/childtwo">
            Child Two
        </NavLink>
        <NavLink className="nav-item" to="/childthree">
            Child Three
        </NavLink>
      </nav>
    </div> 
    <Outlet />
    </>
  )
}

export default Parent
