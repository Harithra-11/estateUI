import {useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"
function Navbar(){
    const [open,setOpen]=useState(false);
    const user=true;
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>We3Homes</span>
                </a>
                <a href="/" className="navv">Home</a>
                <a href="/" className="navv">About</a>
                <a href="/" className="navv">Contact</a>
                <a href="/" className="navv">Agents</a>
            </div>
            <div className="right">
                {user ? (<div className="user">
                    <img src="/selfie.jpg" alt="" />
                    <span>John doe</span>
                    <Link to="/profile" className="profile">
                    <div className="notification">3</div>
                    <span>Profile</span></Link>
                </div>) : (
                    <>
                        <a href="/">Sign In</a>
                    
                <a href="/" className="register">Sign Up</a></>)}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign In </a>
                    <a href="/">Sign Up</a>
                
                </div>
            </div>
        </nav>
    )
}
export default Navbar
