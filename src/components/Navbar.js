import React from "react";
//import { Link } from "react-router-dom";


const Navbar = () => { 
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <div className="dropdown justify-content-start">
                    <button className="btn btn-lg btn-secondary dropdown dropdown-toggle m-2" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href='/'>Home</a>
                        <a className="dropdown-item" href='/about'>About</a>
                        <a className="dropdown-item" href='/contact'>Contact Us</a>
                    </div>
                </div>
                <h1 className="display-1 text-uppercase">Alpha Tree Surgeons</h1>
            </div>
        </nav>
    );
}

export default Navbar;