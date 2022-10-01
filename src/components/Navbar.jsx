import {NavLink } from "react-router-dom";
import { Auth } from "./auth";

const Navbar =()=>{
    const auth= Auth();
    return(
        <div>
            <nav>
                <NavLink to="/" >Home</NavLink>
                {/* <NavLink to="/register">Register</NavLink> */}
                <NavLink to="/profile">Profile</NavLink>
                { !auth.login ? <NavLink to="/login">Login</NavLink> : null }
                { !auth.user ? <NavLink to="/register">Register</NavLink> : null }
            </nav>
             
        </div>
    );
}
export default Navbar;