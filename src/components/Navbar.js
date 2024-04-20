import React from "react";

//import { Link } from "react-router-dom";


const Navbar = () => { 
    
    return (
        
            <nav id="nav" className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid">
                    <div className="dropdown justify-content-start">
                        <button className="btn btn-lg btn-white border border-white text-white dropdown dropdown-toggle m-3 p-3" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href='/'>Home</a>
                            <a className="dropdown-item" href='#about'>About</a>
                            <a className="dropdown-item" href='#contact'>Contact Us</a>
                            <a className="dropdown-item" href='#gallery'>Gallery</a>
                        </div>
                    </div>
                    <div className="">
                        
                        <h1 className="display-1 text-white text-uppercase m-2"><i className="fas fa-tree text-white m-2"></i>Alpha Tree Surgeons<i className="fas fa-tree text-white m-2"></i></h1>
                        <div className="d-flex justify-content-end">
                            <p className="text-white fs-2 mx-5"><a href="tel:+19105208878"><strong>+1-910-520-8878</strong></a></p>
                            <i className="fab fa-facebook-square fa-3x text-white m-2"></i>
                            <i className="fab fa-instagram fa-3x text-white m-2"></i>
                            <i className="fab fa-twitter-square fa-3x text-white m-2"></i>
                        </div>
                    </div>
                </div>
            </nav>
        
    );
}

export default Navbar;