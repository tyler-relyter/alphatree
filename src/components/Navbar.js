import React from "react";

//import { Link } from "react-router-dom";


const Navbar = () => { 
    
    return (
        
            <nav id="nav" className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid">
                    <div className="dropdown justify-content-start">
                        <button className="btn btn-lg btn-secondary dropdown dropdown-toggle m-3 p-3" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href='/'>Home</a>
                            <a className="dropdown-item" href='#about'>About</a>
                            <a className="dropdown-item" href='#contact'>Contact Us</a>
                            <a className="dropdown-item" href='#gallery'>Gallery</a>
                        </div>
                    </div>
                    <h1 className="display-1 text-white text-uppercase">Alpha Tree Surgeons</h1>
                </div>
            </nav>
        
    );
}

export default Navbar;