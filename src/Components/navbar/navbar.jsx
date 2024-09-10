import { Link, NavLink } from "react-router-dom";
import "./navCss.css"
import { useContext } from "react";
import { UserDetails } from "../nestedNav/nav-stack";
const Navbar = () => {
  

  return (

    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light}`} >
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ul">
             
              <li className="nav-item li">
                <NavLink className="liStyle" to={"/"}>Home</NavLink>
                
              </li>
              <li className="nav-item li">
                <NavLink className="liStyle" to={"/about"}>About</NavLink>
              </li>


              <li className="nav-item li">
                <NavLink className="liStyle" to={"/contact-us"}>Contact</NavLink>
              </li>

              <li className="nav-item li">
                <NavLink className="liStyle" to={"/categories"}>Categories</NavLink>
              </li>

              <li className="nav-item li">
                <NavLink className="liStyle" to={"/settings"}>Settings</NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};


export {Navbar}