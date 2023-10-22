import logo from "./img/logo.png";
import "./css/Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar()
{
    return(
        <>
            <div className="background">
            
                {/* Logo and menue */}
                <div className="head uni-padding">
                <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                        {/* logo */}
                        <NavLink to="/" >
                        <div className="logo">
                            <img src={logo} alt="Logo"/>
                        </div>
                        </NavLink>
                        {/* list */}
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                	    <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="list">
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item"><NavLink className="nav-NavLink " to="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-NavLink " to="/about">About</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-NavLink " to="/">Tickets</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-NavLink " to="/booking">Booking</NavLink></li>
                                
                                {/* Dropdown menue */}
                                <li className="dropdown"><a className="nav-NavLink dropdown-toggle" data-bs-toggle="dropdown" href="/">Login<span class="caret"></span></a>
                			        <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink className="nav-NavLink text-dark" to="/login">Login</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-NavLink text-dark" to="/register">Sign up</NavLink></li>
                			        </ul>
                                </li>
                            </ul>
                        </div>
                        </div>
                </div>
                </nav>
                </div>
                {/* Search Bar */}
                <div className="search-bar ">
                        <h1 className="text-light uni-padding">Explore The Inner Beauty of India</h1>
                        <h5 className="text-light uni-padding">
                        Explore the Land of Diversity
                        </h5>
                        <form className="uni-padding">
                            <input  className="search_input" type="text" placeholder="Where you want to go?"/>
                            <input className="search_button" type="submit" value="Search"/>
                        </form>
                </div>
            </div>
        </>
    );
}
export default Navbar;